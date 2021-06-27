import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { LocalizationModule } from '@tyrcord/feature/shared/localization';
import { UITypographyModule } from '@tyrcord/ui/typography';
import { UILayoutModule } from '@tyrcord/ui/layout';
import { UICoreModule } from '@tyrcord/ui/core';

import { AboutComponent } from './about.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/about/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    UITypographyModule,
    UICoreModule,
    UILayoutModule,
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
      { path: '', pathMatch: 'full', component: AboutComponent },
    ]),
  ],
  declarations: [AboutComponent],
})
export class AboutModule {}
