import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { NgModule } from '@angular/core';

import { FeatureSharedServicesModule } from '@tyrcord/feature/shared/services';
import { LocalizationModule } from '@tyrcord/feature/shared/localization';
import { TypographyModule } from '@tyrcord/ui/typography';
import { LayoutModule } from '@tyrcord/ui/layout';
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
    LayoutModule,
    TypographyModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    FeatureSharedServicesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
