import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { TypographyModule } from '@tyrcord/ui/typography';
import { LayoutModule } from '@tyrcord/ui/layout';
import { UICoreModule } from '@tyrcord/ui/core';

import { AppDescriptionComponent } from './components/app-description/app-description.component';
import { AppDetailComponent } from './app-detail.component';

@NgModule({
  imports: [
    CommonModule,
    TypographyModule,
    UICoreModule,
    LayoutModule,
    TranslateModule,
    RouterModule.forChild([
      {
        path: ':id',
        pathMatch: 'full',
        component: AppDetailComponent,
      },
    ]),
  ],
  declarations: [AppDetailComponent, AppDescriptionComponent],
})
export class AppDetailModule {}
