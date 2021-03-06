import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppPrivacyPolicyComponent } from './app-privacy-policy.component';

import { UITypographyModule } from '@tyrcord/ui/typography';
import { UILayoutModule } from '@tyrcord/ui/layout';
import { UICoreModule } from '@tyrcord/ui/core';

@NgModule({
  imports: [
    CommonModule,
    UITypographyModule,
    UICoreModule,
    UILayoutModule,
    TranslateModule.forChild({ extend: true }),
    RouterModule.forChild([
      { path: ':id', pathMatch: 'full', component: AppPrivacyPolicyComponent },
    ]),
  ],
  declarations: [AppPrivacyPolicyComponent],
})
export class AppPrivacyPolicyModule {}
