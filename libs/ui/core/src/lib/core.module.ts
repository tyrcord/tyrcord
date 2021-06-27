import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormFieldDirective } from './directives/form-field.directive';

@NgModule({
  imports: [CommonModule, TranslateModule],
  exports: [FormFieldDirective],
  declarations: [FormFieldDirective],
})
export class UICoreModule {}
