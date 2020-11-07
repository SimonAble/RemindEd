import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { QuestionOption } from '../../Quiz.model';

@Component({
  selector: 'app-CheckAllAnswers',
  templateUrl: './CheckAllAnswers.component.html',
  styleUrls: ['./CheckAllAnswers.component.css']
})
export class CheckAllAnswersComponent implements OnChanges {

  @Input() questionOptions: QuestionOption[];
  questionTitle: string

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
  }

}
