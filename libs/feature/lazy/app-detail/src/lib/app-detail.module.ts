import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { UITypographyModule } from '@tyrcord/ui/typography';
import { UILayoutModule } from '@tyrcord/ui/layout';
import { UICoreModule } from '@tyrcord/ui/core';

import { AppDescriptionComponent } from './components/app-description/app-description.component';
import { AppDetailComponent } from './app-detail.component';

@NgModule({
  imports: [
    CommonModule,
    UITypographyModule,
    UICoreModule,
    UILayoutModule,
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
