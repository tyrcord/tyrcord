import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

import { AppDataProvider } from '@tyrcord/feature/shared/logic/persistance';
import { IAppModel } from '@tyrcord/feature/shared/logic/models';

@Component({
  selector: 'feature-lazy-app-terms-of-service',
  templateUrl: './app-terms-of-service.component.html',
  styleUrls: ['./app-terms-of-service.component.scss'],
})
export class AppTermsOfServiceComponent {
  app: IAppModel;

  constructor(
    private appDataProvider: AppDataProvider,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.app = this.appDataProvider.retreive(id);
  }

  onBack(): void {
    this.router.navigate(['/apps/detail', this.app.id]);
  }
}
