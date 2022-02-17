import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-choice-question',
  templateUrl: './choice-question.component.html',
  styleUrls: ['./choice-question.component.css'],
})
export class ChoiceQuestionComponent implements OnInit {
  @Input() public question?: Question;

  @Output() answerOutput: EventEmitter<{ id: number; text: string }> =
    new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  answerChange(option: string) {
    if (!this.question) return;
    this.answerOutput.emit({ id: this.question.id, text: option });
  }

  getOptionId(id: number, index: number) {
    return `radio-${id}-${index}`;
  }
}
