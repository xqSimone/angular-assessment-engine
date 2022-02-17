import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Answer } from 'src/app/models/Answer';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  @Input() public question?: Question;
  @Output() answerOutput: EventEmitter<{ id: number; text: string }> =
    new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  saveAnswer(answer: Answer) {
    this.answerOutput.emit({ id: answer.id, text: answer.text });
  }
}
