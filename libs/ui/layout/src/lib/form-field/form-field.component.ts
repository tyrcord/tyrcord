import { v4 as uuidv4 } from 'uuid';

import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  forwardRef,
  Input,
  Renderer2,
} from '@angular/core';

import { FormFieldDirective } from '@tyrcord/ui/core';

@Component({
  selector: 'tyrcord-ui-layout-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent implements AfterContentInit {
  @ContentChild(forwardRef(() => FormFieldDirective), {
    read: ElementRef,
  })
  control!: ElementRef;

  @Input()
  label = 'Label';

  id: string = uuidv4();

  constructor(private renderer: Renderer2) {}

  ngAfterContentInit() {
    if (!this.control) {
      throw new Error(
        'FormFieldComponent: Missing tyrcordFormField directive! No control found!'
      );
    }

    this.renderer.setAttribute(this.control.nativeElement, 'id', this.id);
  }
}
