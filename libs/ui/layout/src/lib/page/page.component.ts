import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tyrcord-ui-layout-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent {
  @Input()
  headline: string;

  @Input()
  showBackButton = false;

  @Output()
  back = new EventEmitter();

  onBack(): void {
    if (this.showBackButton) {
      this.back.emit();
    }
  }
}
