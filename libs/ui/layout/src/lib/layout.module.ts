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
import { ListViewComponent } from './list-view/list-view.component';
import { MenuOptionComponent } from './menu-option/menu-option.component';

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
    ListViewComponent,
    MenuOptionComponent,
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
    ListViewComponent,
    MenuOptionComponent,
  ],
})
export class LayoutModule {}
