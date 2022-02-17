import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Answer } from 'src/app/models/Answer';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
})
export class QuestionListComponent implements OnInit {
  @Input() public questions: Question[] = [];
  @Output() answerOutput: EventEmitter<{ [id: number]: string }> =
    new EventEmitter();
  public answers: { [id: number]: string } = {};
  public disabled: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  saveAnswer(answer: Answer) {
    this.answers[answer.id] = answer.text;
    this.disabled = Object.keys(this.answers).length !== this.questions.length;
  }

  submit() {
    this.answerOutput.emit(this.answers);
  }
}
