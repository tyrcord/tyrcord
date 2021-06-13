import { Component, Input, OnInit } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'tyrcord-ui-core-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  @Input()
  animationDuration = 1_000;

  @Input()
  animationDelay = 300;

  private _value = 0;

  @Input()
  set value(value: number) {
    this._value = value > 0 ? value : 0;
  }

  get value() {
    return this._value;
  }

  initialValue = '00';

  counter$?: Observable<string>;

  ngOnInit(): void {
    const start = 0;
    const end = this.value + 1;
    const animationInterval = this.animationDuration / end;

    this.counter$ = timer(this.animationDelay, animationInterval).pipe(
      map((value: number) => {
        const count = start + value;

        if (count < 10) {
          return `0${count}`;
        }

        return count.toString();
      }),
      take(end)
    );
  }
}
