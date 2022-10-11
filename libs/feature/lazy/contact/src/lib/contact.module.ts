import { LayoutModule as MaterialLayoutModule } from '@angular/cdk/layout';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LocalizationModule } from '@tyrcord/feature/shared/localization';
import { UIComponentModule } from '@tyrcord/ui/component';
import { UITypographyModule } from '@tyrcord/ui/typography';
import { UILayoutModule } from '@tyrcord/ui/layout';
import { UICoreModule } from '@tyrcord/ui/core';

import { ContactFormConfirmComponent } from './components/contact-form-confirm/contact-form-confirm.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactComponent } from './contact.component';
import { ContactFormErrorComponent } from './components/contact-form-error/contact-form-error.component';
import { ContactFormSendingComponent } from './components/contact-form-sending/contact-form-sending.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/contact/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    UITypographyModule,
    UICoreModule,
    UILayoutModule,
    UIComponentModule,
    ReactiveFormsModule,
    MaterialLayoutModule,
    AngularFireDatabaseModule,
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
  declarations: [
    ContactComponent,
    ContactItemComponent,
    ContactFormComponent,
    ContactFormConfirmComponent,
    ContactListComponent,
    ContactFormErrorComponent,
    ContactFormSendingComponent,
  ],
})
export class ContactModule {}
