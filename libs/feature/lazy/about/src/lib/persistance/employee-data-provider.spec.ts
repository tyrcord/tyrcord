import { TestBed } from '@angular/core/testing';
import { DateTime } from 'luxon';

import { EmployeeDataProvider } from './employee.data-provider';

describe('EmployeeDataProvider', () => {
  let service: EmployeeDataProvider;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [EmployeeDataProvider],
    }).compileComponents();

    service = TestBed.inject(EmployeeDataProvider);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should allow to list the employees', () => {
    const employees = service.list();

    expect(employees).toBeTruthy();
    expect(employees.length).toEqual(1);

    const employee = employees[0];

    expect(employee.firstname).toEqual('Thibault');
    expect(employee.lastname).toEqual('Zanini');
    expect(employee.startDate instanceof DateTime).toEqual(true);
  });
});
