import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-textarea-question',
  templateUrl: './textarea-question.component.html',
  styleUrls: ['./textarea-question.component.css'],
})
export class TextareaQuestionComponent implements OnInit {
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
