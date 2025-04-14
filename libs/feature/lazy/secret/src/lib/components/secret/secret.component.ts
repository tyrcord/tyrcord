import { Component } from '@angular/core';

@Component({
    selector: 'tyrcord-secret',
    templateUrl: './secret.component.html',
    styleUrls: ['./secret.component.scss'],
    standalone: false
})
export class SecretComponent {
  showAnswer = false;
}
