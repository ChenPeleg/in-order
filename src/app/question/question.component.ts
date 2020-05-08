import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  // @Input()
  // questionText1 = this.questionText
  questionText = "לחץ על האסטרואידים לפי הסדר"
  constructor() { }


  ngOnInit(): void {
  }

}
