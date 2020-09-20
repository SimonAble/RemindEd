import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { QuestionModel, QuestionTypeEnum, QuestionOption } from './Quiz.model';

@Component({
  selector: 'app-QuizEditor',
  templateUrl: './QuizEditor.component.html',
  styleUrls: ['./QuizEditor.component.css']
})
export class QuizEditorComponent implements OnInit {

  panelOpenState = false;

  questions: QuestionModel[] = [];
  questionTypes = QuestionTypeEnum;

  constructor() { }

  ngOnInit() {
  }

  public addNewQuestion() {
    this.questions.push(new QuestionModel());
  }

  drop(event: CdkDragDrop<QuestionModel[]>) {
    moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
  }

  public addNewRadioOption(questionIndex: number) {
    this.questions[questionIndex].questionOptions.push("");
    console.log("Question Options: " + JSON.stringify(this.questions[questionIndex].questionOptions))
  }
}
