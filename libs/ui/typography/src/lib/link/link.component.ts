import { Component, Input } from '@angular/core';

@Component({
  selector: 'tyrcord-ui-typography-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent {
  @Input()
  href: string;

  @Input()
  text: string;

  @Input()
  isExternal = false;
}
