import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'tyrcord-ui-layout-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss'],
})
export class FormErrorComponent {
  @HostBinding('class.visible')
  @Input()
  visible = false;
}
