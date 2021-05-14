import { Injectable } from '@angular/core';

import { IAppModel } from '@tyrcord/feature/shared/logic/models';

import apps from '../data/apps.json';

const applicationDetails = apps as IAppModel[];

@Injectable({
  providedIn: 'root',
})
export class AppDataProvider {
  list(): IAppModel[] {
    return applicationDetails;
  }

  listAndSort(): IAppModel[] {
    return this.list().sort((a, b) => a.name.localeCompare(b.name));
  }

  retreive(id: string): IAppModel {
    return applicationDetails.find((app: IAppModel) => app.id === id);
  }
}
