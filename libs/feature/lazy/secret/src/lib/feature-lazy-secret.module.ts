import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SecretComponent } from './components/secret/secret.component';
import { Gatekeeper } from './guards/gatekeeper.guard';

import { LocalizationModule } from '@tyrcord/feature/shared/localization';
import { UITypographyModule } from '@tyrcord/ui/typography';
import { UILayoutModule } from '@tyrcord/ui/layout';
import { UICoreModule } from '@tyrcord/ui/core';
import { AnswerComponent } from './components/answer/answer.component';
import { QuizzComponent } from './components/quizz/quizz.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/secret/', '.json');
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
      {
        path: '',
        pathMatch: 'full',
        component: SecretComponent,
        canActivate: [Gatekeeper],
      },
    ]),
  ],
  declarations: [SecretComponent, AnswerComponent, QuizzComponent],
  providers: [Gatekeeper],
})
export class SecretModule {}
