import { Component } from '@angular/core';

import { AppDataProvider } from '@tyrcord/feature/shared/logic/persistance';
import { IAppModel } from '@tyrcord/feature/shared/logic/models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'feature-lazy-app-privacy-policy',
  templateUrl: './app-privacy-policy.component.html',
  styleUrls: ['./app-privacy-policy.component.scss'],
})
export class AppPrivacyPolicyComponent {
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
