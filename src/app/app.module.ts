import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizzComponent } from './components/quizz/quizz.component';
import { HomeComponent } from './pages/home/home.component';
import { QuizzQuestionComponent } from './components/quizz-question/quizz-question.component';
import { QuizzOptionsComponent } from './components/quizz-options/quizz-options.component';
import { QuizzResultsComponent } from './components/quizz-results/quizz-results.component';
import { QuizzLogoComponent } from './components/quizz-logo/quizz-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizzComponent,
    HomeComponent,
    QuizzQuestionComponent,
    QuizzOptionsComponent,
    QuizzResultsComponent,
    QuizzLogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
