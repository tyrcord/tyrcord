import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'tyrcord-ui-typography-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.scss'],
    standalone: false
})
export class LinkComponent {
  @Input()
  href: string;

  @Input()
  text: string;

  @Input()
  isExternal = false;

  @HostBinding('class.disabled')
  @Input()
  disabled = false;
}
