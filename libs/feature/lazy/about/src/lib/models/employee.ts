import { DateTime } from 'luxon';

export interface Employee {
  startDate: DateTime;
  firstname: string;
  lastname: string;
  job: string;
}
