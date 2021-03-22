import { Component, OnInit, Input } from '@angular/core';

import { IAppModel } from '@tyrcord/feature/shared/logic/models';

@Component({
  selector: 'tyrcord-feature-lazy-app-item',
  templateUrl: './app-item.component.html',
  styleUrls: ['./app-item.component.scss'],
})
export class AppItemComponent implements OnInit {
  @Input()
  app: IAppModel;

  thumbnails: string[];

  ngOnInit(): void {
    this.buildAppThumbnails();
  }

  private buildAppThumbnails(): void {
    const thumbnail = this.app.thumbnail;
    const thumbnails = [];

    for (let i = 2; i < 4; i++) {
      thumbnails.push(thumbnail.replace('.png', `@${i}x.png ${i}x`));
    }

    this.thumbnails = thumbnails;
  }
}
