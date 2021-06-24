import { catchError, timeout, take, tap, map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import {
  asyncScheduler,
  from,
  lastValueFrom,
  Observable,
  of,
  SchedulerAction,
  Subject,
  Subscription,
} from 'rxjs';

import { Mail, MailDeliveryStatus, RegisteredMail } from '../models';

@Injectable()
export class Messenger {
  private static readonly databaseKey = 'mails';
  private static readonly timeout = 15_000;

  private deliveryCenter = new Subject<RegisteredMail>();
  private deliveryCenterSubscription: Subscription;
  private isOpened = false;

  onDelivery = new Subject<MailDeliveryStatus>();

  constructor(private database: AngularFireDatabase) {}

  open(): void {
    if (!this.isOpened) {
      this.deliveryCenterSubscription = this.deliveryCenter.subscribe(
        (registeredMail: RegisteredMail) => {
          this.onDelivery.next({
            trackerId: registeredMail.trackerId,
            sending: true,
          });

          this.deliverAndTrack(registeredMail);
        }
      );

      this.isOpened = true;
    }
  }

  close(): void {
    if (this.isOpened) {
      this.deliveryCenterSubscription.unsubscribe();
      this.isOpened = false;
    }
  }

  send(mail: Mail): string {
    const trackerId = this.getTrackerId();

    this.scheduleDelivery(() => {
      this.deliveryCenter.next({
        trackerId,
        mail,
      });
    });

    return trackerId;
  }

  private getTrackerId(): string {
    return uuidv4();
  }

  private scheduleDelivery<T>(
    work: (this: SchedulerAction<T>, state?: T) => void
  ): void {
    asyncScheduler.schedule(work);
  }

  private deliverAndTrack(registeredMail: RegisteredMail): void {
    lastValueFrom(
      this.deliver(registeredMail).pipe(
        catchError(() => {
          return of({
            trackerId: registeredMail.trackerId,
            hasError: true,
          });
        }),
        tap((status: MailDeliveryStatus) => {
          this.onDelivery.next(status);
        })
      )
    );
  }

  private deliver({
    trackerId,
    mail,
  }: RegisteredMail): Observable<MailDeliveryStatus> {
    const { name, email, body } = mail;

    return from(
      this.database.list(Messenger.databaseKey).push({
        name,
        email,
        body,
      })
    ).pipe(
      timeout(Messenger.timeout),
      take(1),
      map(() => ({ sent: true, trackerId }))
    );
  }
}
