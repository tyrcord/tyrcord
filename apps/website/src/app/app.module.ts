import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { NgModule } from '@angular/core';

import { LocalizationModule } from '@tyrcord/feature/shared/localization';
import { UIComponentModule } from '@tyrcord/ui/component';
import { UITypographyModule } from '@tyrcord/ui/typography';
import { UILayoutModule } from '@tyrcord/ui/layout';
import { UICoreModule } from '@tyrcord/ui/core';

import { kDefaultLanguage, kSupportedLanguages } from './constants';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    LocalizationModule.forRoot({
      defaultLanguage: kDefaultLanguage,
      supportedLanguages: kSupportedLanguages,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AppRoutingModule,
    UICoreModule,
    UILayoutModule,
    UITypographyModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    UIComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
