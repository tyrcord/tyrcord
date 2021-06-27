import { Injectable } from '@angular/core';

import { EmployeeDataProvider } from '../persistance';
import { Employee } from '../models';

@Injectable()
export class TeamService {
  constructor(private dataProvider: EmployeeDataProvider) {}

  listEmployee(): readonly Employee[] {
    return this.dataProvider.list();
  }
}
