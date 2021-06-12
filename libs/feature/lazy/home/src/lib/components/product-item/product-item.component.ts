import { Component, Input } from '@angular/core';

@Component({
  selector: 'tyrcord-feature-lazy-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input()
  title?: string;

  @Input()
  description?: string;
}
