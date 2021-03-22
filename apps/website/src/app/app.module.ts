import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LocalizationModule } from '@tyrcord/feature/shared/localization';
import { TypographyModule } from '@tyrcord/ui/typography';
import { LayoutModule } from '@tyrcord/ui/layout';
import { UICoreModule } from '@tyrcord/ui/core';

import { kDefaultLanguage, kSupportedLanguages } from './constants';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
