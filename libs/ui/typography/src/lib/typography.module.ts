import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubheadComponent } from './subhead/subhead.component';
import { BodyComponent } from './body/body.component';
import { CaptionComponent } from './caption/caption.component';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { LinkComponent } from './link/link.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SubheadComponent,
    BodyComponent,
    CaptionComponent,
    SubtitleComponent,
    LinkComponent,
    TitleComponent,
  ],
  exports: [
    SubheadComponent,
    BodyComponent,
    CaptionComponent,
    SubtitleComponent,
    LinkComponent,
    TitleComponent,
  ],
})
export class TypographyModule {}
