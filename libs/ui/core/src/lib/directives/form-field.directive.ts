/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable @angular-eslint/no-host-metadata-property */
import { Directive } from '@angular/core';

@Directive({
  selector: 'input[tyrcordFormField], textarea[tyrcordFormField]',
  exportAs: 'tyrcordFormField',
  host: {
    'class': 'tyrcord-input-element',
  },
})
export class FormFieldDirective {}
