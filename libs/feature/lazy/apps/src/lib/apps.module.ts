import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { LocalizationModule } from '@tyrcord/feature/shared/localization';
import { TypographyModule } from '@tyrcord/ui/typography';
import { LayoutModule } from '@tyrcord/ui/layout';
import { UICoreModule } from '@tyrcord/ui/core';

import { AppItemComponent } from './components/app-item/app-item.component';
import { AppsComponent } from './apps.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/apps/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    TypographyModule,
    UICoreModule,
    LayoutModule,
    LocalizationModule.forChild({
      defaultLanguage: 'en',
      supportedLanguages: ['en', 'fr'],
    }),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      isolate: true,
    }),
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AppsComponent },
      {
        path: 'detail',
        loadChildren: () =>
          import('@tyrcord/feature/lazy/app-detail').then(
            (m) => m.AppDetailModule
          ),
      },
      {
        path: 'privacy',
        loadChildren: () =>
          import('@tyrcord/feature/lazy/app-privacy-policy').then(
            (m) => m.AppPrivacyPolicyModule
          ),
      },
      {
        path: 'tos',
        loadChildren: () =>
          import('@tyrcord/feature/lazy/app-terms-of-service').then(
            (m) => m.AppTermsOfServiceModule
          ),
      },
    ]),
  ],
  declarations: [AppsComponent, AppItemComponent],
})
export class AppsModule {}
