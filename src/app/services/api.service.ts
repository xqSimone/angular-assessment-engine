import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getAssesments() {
    return this.http.get(`${this.apiUrl}/assessments/`);
  }

  getQuestions(assessmentId: number) {
    return this.http.get(
      `${this.apiUrl}/questions/?assessmentId=${assessmentId}`
    );
  }
}
