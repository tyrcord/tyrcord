import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LocalizationModule } from '@tyrcord/feature/shared/localization';
import { TypographyModule } from '@tyrcord/ui/typography';
import { LayoutModule } from '@tyrcord/ui/layout';
import { UICoreModule } from '@tyrcord/ui/core';

import { HomeComponent } from './home.component';
import { MarketingWhyUsComponent } from './components/marketing-why-us/marketing-why-us.component';
import { MarketingProductsComponent } from './components/marketing-products/marketing-products.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { MarketingIntroComponent } from './components/marketing-intro/marketing-intro.component';
import { MarketingDevelopmentGraphicComponent } from './components/marketing-development-graphic/marketing-development-graphic.component';
import { MarketingDevelopmentComponent } from './components/marketing-development/marketing-development.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/home/', '.json');
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
      { path: '', pathMatch: 'full', component: HomeComponent },
    ]),
  ],
  declarations: [
    HomeComponent,
    MarketingWhyUsComponent,
    MarketingProductsComponent,
    ProductItemComponent,
    MarketingIntroComponent,
    MarketingDevelopmentGraphicComponent,
    MarketingDevelopmentComponent,
  ],
})
export class HomeModule {}
