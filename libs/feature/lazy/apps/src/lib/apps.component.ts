import { Component, OnInit } from '@angular/core';

import { AppDataProvider } from '@tyrcord/feature/shared/logic/persistance';
import { IAppModel } from '@tyrcord/feature/shared/logic/models';

@Component({
  selector: 'tyrcord-feature-lazy-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss'],
})
export class AppsComponent implements OnInit {
  apps: IAppModel[];

  constructor(private appDataProvider: AppDataProvider) {}

  ngOnInit(): void {
    this.apps = this.appDataProvider.list();
  }
}
