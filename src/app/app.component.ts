import { Component } from '@angular/core';
import { Assessment } from './models/Assessment';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'assessment-engine';
  assessments: Assessment[] = [];

  constructor(private apiService: ApiService) {
    this.apiService.getAssesments().subscribe((results: any) => {
      this.assessments = results;
    });
  }
}
