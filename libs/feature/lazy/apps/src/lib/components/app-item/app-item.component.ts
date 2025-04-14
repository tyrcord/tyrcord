import { Component, OnInit, Input } from '@angular/core';

import { IAppModel } from '@tyrcord/feature/shared/logic/models';

@Component({
    selector: 'tyrcord-feature-lazy-app-item',
    templateUrl: './app-item.component.html',
    styleUrls: ['./app-item.component.scss'],
    standalone: false
})
export class AppItemComponent implements OnInit {
  @Input()
  app: IAppModel;

  pngThumbnails: string;
  webpThumbnails: string;

  ngOnInit(): void {
    this.buildAppThumbnails();
  }

  private buildAppThumbnails(): void {
    const thumbnail = this.app.thumbnail;
    const pngThumbnails = [];
    const webpThumbnails = [thumbnail.replace('.png', '.webp')];

    for (let i = 2; i < 4; i++) {
      pngThumbnails.push(thumbnail.replace('.png', `@${i}x.png ${i}x`));
      webpThumbnails.push(thumbnail.replace('.png', `@${i}x.webp ${i}x`));
    }

    this.pngThumbnails = pngThumbnails.join(', ');
    this.webpThumbnails = webpThumbnails.join(', ');
  }
}
