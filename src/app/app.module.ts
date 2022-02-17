import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiService } from './services/api.service';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionComponent } from './components/question/question.component';
import { InputQuestionComponent } from './components/questions/input-question/input-question.component';
import { TextareaQuestionComponent } from './components/questions/textarea-question/textarea-question.component';
import { ChoiceQuestionComponent } from './components/questions/choice-question/choice-question.component';
import { AnswerListComponent } from './components/answer-list/answer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AssessmentComponent,
    QuestionListComponent,
    QuestionComponent,
    InputQuestionComponent,
    TextareaQuestionComponent,
    ChoiceQuestionComponent,
    AnswerListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
