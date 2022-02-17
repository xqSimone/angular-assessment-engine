import { Component, Input, OnInit } from '@angular/core';
import { Assessment } from 'src/app/models/Assessment';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css'],
})
export class AnswerListComponent implements OnInit {
  @Input() public questions: Question[] = [];
  @Input() public answers: { [id: number]: string } = {};

  constructor() {}

  ngOnInit(): void {}
}
