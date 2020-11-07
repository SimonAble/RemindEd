import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { QuestionModel, QuestionTypeEnum, QuestionOption } from './Quiz.model';
import { Topic } from 'src/app/InternalViews/CreateView/CreateLectureContent/CreateLectureContent.model';

@Component({
  selector: 'app-QuizEditor',
  templateUrl: './QuizEditor.component.html',
  styleUrls: ['./QuizEditor.component.css']
})
export class QuizEditorComponent implements OnChanges {

  @Input() activeTopic: Topic;
  @Input() isReadOnly: boolean = false;

  panelOpenState = false;
  questionTypes = QuestionTypeEnum;

  constructor() { }

  ngOnChanges() {
    console.log("In quiz component");
    console.log(JSON.stringify(this.activeTopic.questions));
    console.log(JSON.stringify(this.activeTopic));
    //this.activeTopic.questions = [];
  }

  public addNewQuestion() {
    console.log("Adding new question: ");
    this.activeTopic.questions.push(new QuestionModel());
    console.log("Question Model: " + JSON.stringify(this.activeTopic.questions));
  }

  drop(event: CdkDragDrop<QuestionModel[]>) {
    moveItemInArray(this.activeTopic.questions, event.previousIndex, event.currentIndex);
  }

  public addNewRadioOption(questionIndex: number) {
    this.activeTopic.questions[questionIndex].questionOptions.push(new QuestionOption());
    console.log("Question Options: " + JSON.stringify(this.activeTopic.questions[questionIndex].questionOptions))
  }


}
