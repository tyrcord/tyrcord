import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TypographyModule } from '@tyrcord/ui/typography';

import { AppFooterComponent } from './app-footer/app-footer.component';
import { ListItemComponent } from './list-item/list-item.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { LayoutAppComponent } from './app/app.component';
import { PageComponent } from './page/page.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  imports: [CommonModule, TypographyModule, TranslateModule],
  declarations: [
    LayoutAppComponent,
    PageComponent,
    AppBarComponent,
    ListItemComponent,
    AppFooterComponent,
    HomeCardComponent,
    ParagraphComponent,
    ArticleComponent,
  ],
  exports: [
    LayoutAppComponent,
    PageComponent,
    AppBarComponent,
    ListItemComponent,
    AppFooterComponent,
    HomeCardComponent,
    ParagraphComponent,
    ArticleComponent,
  ],
})
export class LayoutModule {}
