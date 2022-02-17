import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-input-question',
  templateUrl: './input-question.component.html',
  styleUrls: ['./input-question.component.css'],
})
export class InputQuestionComponent implements OnInit {
  @Input() public question?: Question;

  @Output() answerOutput: EventEmitter<{ id: number; text: string }> =
    new EventEmitter();

  answer: string = '';

  constructor() {}

  ngOnInit(): void {}

  answerChange() {
    if (!this.question) return;
    this.answerOutput.emit({ id: this.question.id, text: this.answer });
  }
}
