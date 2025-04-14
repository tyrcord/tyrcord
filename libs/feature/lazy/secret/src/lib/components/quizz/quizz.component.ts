import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'tyrcord-quizz',
    templateUrl: './quizz.component.html',
    styleUrls: ['./quizz.component.scss'],
    standalone: false
})
export class QuizzComponent {
  @Output()
  answerRequest = new EventEmitter<void>();

  onAnswerRequested(): void {
    this.answerRequest.emit();
  }
}
