import { Component, Input } from '@angular/core';

@Component({
    selector: 'tyrcord-ui-layout-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss'],
    standalone: false
})
export class SectionComponent {
  @Input()
  sectionTitle?: string;
}
