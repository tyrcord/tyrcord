import { Component, Input } from '@angular/core';

@Component({
  selector: 'tyrcord-feature-lazy-marketing-section',
  templateUrl: './marketing-section.component.html',
  styleUrls: ['./marketing-section.component.scss'],
})
export class MarketingSectionComponent {
  @Input()
  sectionTitle? : string;
}
