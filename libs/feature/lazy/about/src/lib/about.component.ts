import { Component, Input, OnInit } from '@angular/core';
import { DateTime } from 'luxon';

import { TeamService } from './services';
import { Employee } from './models';

@Component({
  selector: 'tyrcord-feature-lazy-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [TeamService],
})
export class AboutComponent implements OnInit {
  @Input()
  startDate = DateTime.fromISO('2013-06-01T00:00:00Z');

  workingYears: number;

  employee: Employee;

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    const [employee] = this.teamService.listEmployee();
    this.employee = employee;

    const now = DateTime.now();
    const { years } = now.diff(employee.startDate, 'years').toObject();
    this.workingYears = Math.floor(years);
  }
}
