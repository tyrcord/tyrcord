import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'tyrcord-feature-lazy-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  startDate = DateTime.fromISO('2013-06-01T00:00:00Z');

  workingYears: number;

  ngOnInit(): void {
    const { years } = DateTime.now().diff(this.startDate, 'years').toObject();
    this.workingYears = Math.floor(years);
  }
}
