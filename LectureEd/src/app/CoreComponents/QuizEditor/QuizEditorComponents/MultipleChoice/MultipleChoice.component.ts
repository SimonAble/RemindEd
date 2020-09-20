import { Component, OnInit, Input } from '@angular/core';
import { QuestionModel, QuestionOption } from '../../Quiz.model';

@Component({
  selector: 'app-MultipleChoice',
  templateUrl: './MultipleChoice.component.html',
  styleUrls: ['./MultipleChoice.component.css']
})
export class MultipleChoiceComponent implements OnInit {

  @Input() questions: string[];
  questionTitle: string

  constructor() { }

  ngOnInit() {
  }

}
