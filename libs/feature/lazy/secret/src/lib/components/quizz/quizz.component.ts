import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tyrcord-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss'],
})
export class QuizzComponent {
  @Output()
  answerRequest = new EventEmitter<void>();

  onAnswerRequested(): void {
    this.answerRequest.emit();
  }
}
