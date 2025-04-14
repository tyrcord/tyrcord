import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'tyrcord-ui-layout-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss'],
    standalone: false
})
export class PageComponent {
  @Input()
  showBackButton = false;

  @Input()
  headline?: string;

  @Output()
  back = new EventEmitter();

  onBack(): void {
    if (this.showBackButton) {
      this.back.emit();
    }
  }
}
