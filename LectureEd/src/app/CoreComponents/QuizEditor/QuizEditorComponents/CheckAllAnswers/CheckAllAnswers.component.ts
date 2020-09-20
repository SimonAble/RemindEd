import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-CheckAllAnswers',
  templateUrl: './CheckAllAnswers.component.html',
  styleUrls: ['./CheckAllAnswers.component.css']
})
export class CheckAllAnswersComponent implements OnInit {

  @Input() questions: string[];
  questionTitle: string

  constructor() { }

  ngOnInit() {
  }

}
