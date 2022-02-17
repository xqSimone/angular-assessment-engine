import { Component, Input, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/Answer';
import { Assessment } from 'src/app/models/Assessment';
import { Question } from 'src/app/models/Question';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css'],
})
export class AssessmentComponent implements OnInit {
  @Input() public assessment?: Assessment;

  public questions: Question[] = [];
  public open: boolean = false;
  public answers?: { [id: number]: string };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  openAssessment() {
    if (this.open) {
      this.open = !this.open;
      return;
    }
    if (!this.assessment) return;
    this.apiService
      .getQuestions(this.assessment.id)
      .subscribe((results: any) => {
        this.questions = results;
        console.log(this.questions);
        this.open = !this.open;
      });
  }

  saveAnswer(answers: { [id: number]: string }) {
    this.answers = answers;
  }
}
