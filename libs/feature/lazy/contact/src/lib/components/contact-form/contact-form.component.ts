import { TranslateService } from '@ngx-translate/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';

import { ContactFormErrorOptions } from '../../types';
import { MailDeliveryStatus } from '../../models';
import { Messenger } from '../../services';

@Component({
    selector: 'tyrcord-feature-lazy-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss'],
    providers: [Messenger],
    standalone: false
})
export class ContactFormComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<boolean>();

  nameMaxLength = 100;
  nameMinLength = 3;

  messageMaxLength = 1_000;
  messageMinLength = 60;

  contactForm = new UntypedFormGroup({
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    name: new UntypedFormControl('', [
      Validators.maxLength(this.nameMaxLength),
      Validators.minLength(this.nameMinLength),
      Validators.required,
    ]),
    message: new UntypedFormControl('', [
      Validators.maxLength(this.messageMaxLength),
      Validators.minLength(this.messageMinLength),
      Validators.required,
    ]),
  });

  get name(): AbstractControl {
    return this.contactForm.get('name');
  }

  get email(): AbstractControl {
    return this.contactForm.get('email');
  }

  get message(): AbstractControl {
    return this.contactForm.get('message');
  }

  get nameErrorMessage(): Observable<string> {
    return this.getErrorMessageForControl(this.name, {
      maxLength: this.nameMaxLength,
      minLength: this.nameMinLength,
    });
  }

  get emailErrorMessage(): Observable<string> {
    return this.getErrorMessageForControl(this.email);
  }

  get messageErrorMessage(): Observable<string> {
    return this.getErrorMessageForControl(this.message, {
      maxLength: this.messageMaxLength,
      minLength: this.messageMinLength,
    });
  }

  mailStatus: MailDeliveryStatus;
  trackerId: string;

  constructor(
    private translate: TranslateService,
    private messenger: Messenger
  ) {}

  ngOnInit(): void {
    this.messenger.open();

    this.messenger.onDelivery
      .pipe(
        filter(
          ({ trackerId }: MailDeliveryStatus) => trackerId === this.trackerId
        )
      )
      .subscribe((status) => (this.mailStatus = status));
  }

  ngOnDestroy(): void {
    this.messenger.close();
    this.unsubscribe$.next(true);
  }

  onReset(): void {
    this.contactForm.reset();
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.valid && !this.mailStatus?.sending) {
      this.lockControls();

      this.trackerId = this.messenger.send({
        name: this.name.value,
        email: this.email.value,
        body: this.message.value,
      });
    }
  }

  private lockControls(): void {
    Object.keys(this.contactForm.controls).forEach((key: string) => {
      this.contactForm.controls[key].disable();
    });
  }

  private unlockControls(): void {
    Object.keys(this.contactForm.controls).forEach((key: string) => {
      this.contactForm.controls[key].enable();
    });
  }

  private getErrorMessageForControl(
    control: AbstractControl,
    options?: ContactFormErrorOptions
  ): Observable<string> {
    if (control.errors?.minlength?.requiredLength) {
      return this.translate.get('ERRORS.FIELD.MIN_LENGTH', {
        min: options.minLength,
      });
    } else if (control.errors?.maxlength?.requiredLength) {
      return this.translate.get('ERRORS.FIELD.MAX_LENGTH', {
        max: options.maxLength,
      });
    } else if (control.errors?.email) {
      return this.translate.get('ERRORS.FIELD.EMAIL_INVALID');
    } else if (control.errors?.required) {
      return this.translate.get('ERRORS.FIELD.REQUIRED');
    }

    return this.translate.get('ERRORS.FIELD.UNKNOWN');
  }
}
