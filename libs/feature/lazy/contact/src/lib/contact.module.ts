import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { LocalizationModule } from '@tyrcord/feature/shared/localization';
import { TypographyModule } from '@tyrcord/ui/typography';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@tyrcord/ui/layout';
import { UICoreModule } from '@tyrcord/ui/core';
import { LayoutModule as MaterialLayoutModule } from '@angular/cdk/layout';

import { ContactComponent } from './contact.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactFormConfirmComponent } from './components/contact-form-confirm/contact-form-confirm.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/contact/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    TypographyModule,
    UICoreModule,
    LayoutModule,
    ReactiveFormsModule,
    MaterialLayoutModule,
    LocalizationModule.forChild({
      defaultLanguage: 'en',
      supportedLanguages: ['en', 'fr'],
    }),
    TranslateModule.forChild({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      isolate: true,
    }),
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ContactComponent },
    ]),
  ],
  declarations: [ContactComponent, ContactItemComponent, ContactFormComponent, ContactFormConfirmComponent, ContactListComponent],
})
export class ContactModule {}
