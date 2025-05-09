import { Component, OnInit } from '@angular/core';

import { AppDataProvider } from '@tyrcord/feature/shared/logic/persistance';
import { IAppModel } from '@tyrcord/feature/shared/logic/models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'feature-lazy-app-detail',
    templateUrl: './app-detail.component.html',
    styleUrls: ['./app-detail.component.scss'],
    standalone: false
})
export class AppDetailComponent implements OnInit {
  webpPreviews: string;
  pngPreviews: string;
  app: IAppModel;

  constructor(
    private appDataProvider: AppDataProvider,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.app = this.appDataProvider.retreive(id);
    this.buildAppPreviews();
  }

  onBack(): void {
    this.router.navigate(['/apps']);
  }

  private buildAppPreviews(): void {
    const preview = this.app.preview;
    const pngPreviews = [];
    const webpPreviews = [preview.replace('.png', `.webp`)];

    for (let i = 2; i < 4; i++) {
      pngPreviews.push(preview.replace('.png', `@${i}x.png ${i}x`));
      webpPreviews.push(preview.replace('.png', `@${i}x.webp ${i}x`));
    }

    this.pngPreviews = pngPreviews.join(', ');
    this.webpPreviews = webpPreviews.join(', ');
  }
}
