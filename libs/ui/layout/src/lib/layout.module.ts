import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UITypographyModule } from '@tyrcord/ui/typography';
import { ReactiveFormsModule } from '@angular/forms';


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
import { SectionComponent } from './section/section.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { FormErrorComponent } from './form-error/form-error.component';

@NgModule({
  imports: [
    CommonModule,
    UITypographyModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
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
    SectionComponent,
    FormFieldComponent,
    FormErrorComponent,
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
    SectionComponent,
    FormFieldComponent,
    FormErrorComponent,
  ],
})
export class UILayoutModule {}
