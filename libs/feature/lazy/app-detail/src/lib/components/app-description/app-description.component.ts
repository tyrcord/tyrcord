import {
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'feature-lazy-app-description',
    templateUrl: './app-description.component.html',
    styleUrls: ['./app-description.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class AppDescriptionComponent {
  @Input()
  description: string;

  @HostBinding('class.app-detail-description')
  mainClass = true;
}
