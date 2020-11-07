import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { QuestionModel, QuestionOption } from '../../Quiz.model';

@Component({
  selector: 'app-MultipleChoice',
  templateUrl: './MultipleChoice.component.html',
  styleUrls: ['./MultipleChoice.component.css']
})
export class MultipleChoiceComponent implements OnChanges {

  @Input() questionOptions: QuestionOption[];
  answerIndex: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Changes detected: " + this.questionOptions);
    this.setCorrectAnswer();
  }

  setQuestion(question:string, optionIndex: number) {
    console.log("Setting Question for Index: " + optionIndex);
    //this.questionOptions[optionIndex].optionText = question;
  }

  setCorrectAnswer() {
    console.log("Setting Correct Answer");

    if(!this.answerIndex) {
        console.log("Setting Answer Index");
        for(let i = 0; i < this.questionOptions.length; i++) {
          if(this.questionOptions[i].isCorrectAnswer) {
            this.answerIndex = i;
          }
        }
    }

    for(let i = 0; i < this.questionOptions.length; i++) {
      console.log(`i: ${i}, AnswerIndex: ${this.answerIndex}`);
      if(i == this.answerIndex) {
        this.questionOptions[i].isCorrectAnswer = true;
      }
      else {
        this.questionOptions[i].isCorrectAnswer = false;
      }
    }
  }

}
