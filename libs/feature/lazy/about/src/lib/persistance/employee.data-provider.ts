import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';

import { Employee, RawEmployee } from '../models';
import data from './employees.json';

const rawEmployees = data.employees as RawEmployee[];

@Injectable()
export class EmployeeDataProvider {
  private static _employees: readonly Employee[];

  private static get employees(): readonly Employee[] {
    if (!this._employees) {
      this._employees = Object.freeze(this.retrieveEmployees());
    }

    return this._employees;
  }

  private static retrieveEmployees(): Employee[] {
    return (rawEmployees as any[]).map((rawEmployee) => {
      const { firstname, lastname, job, startDate } = rawEmployee;

      return Object.freeze({
        firstname,
        lastname,
        job,
        startDate: DateTime.fromISO(startDate),
      });
    });
  }

  list(): readonly Employee[] {
    return EmployeeDataProvider.employees;
  }
}
