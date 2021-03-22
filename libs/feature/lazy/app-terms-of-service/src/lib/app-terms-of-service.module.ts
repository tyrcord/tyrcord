import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TypographyModule } from '@tyrcord/ui/typography';
import { LayoutModule } from '@tyrcord/ui/layout';
import { UICoreModule } from '@tyrcord/ui/core';

import { AppTermsOfServiceComponent } from './app-terms-of-service.component';

@NgModule({
  imports: [
    CommonModule,
    TypographyModule,
    UICoreModule,
    LayoutModule,
    TranslateModule.forChild({ extend: true }),
    RouterModule.forChild([
      { path: ':id', pathMatch: 'full', component: AppTermsOfServiceComponent },
    ]),
  ],
  declarations: [AppTermsOfServiceComponent],
})
export class AppTermsOfServiceModule {}
