import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'tyrcord-feature-lazy-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<boolean>();

  mobileView: boolean;

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(min-width: 769px)'])
      .pipe(takeUntil(this.unsubscribe$), tap(console.log))
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.mobileView = false;
        } else {
          this.mobileView = true;
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
  }
}
