import { Component, Input } from '@angular/core';

@Component({
    selector: 'tyrcord-feature-lazy-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss'],
    standalone: false
})
export class ProductItemComponent {
  @Input()
  label?: string;

  @Input()
  description?: string;
}
