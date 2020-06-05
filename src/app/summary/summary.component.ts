import { Component, OnInit } from '@angular/core';
// interface SummUpIntreface {
//   q0: number
//   q1: number
//   q23: number
//   p0: number
//   p1: number
//   p23: number
// }
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  // num: object = { q0: 0, q1: 1, q23: 0 };
  // pre: object = { q0: 0, q1: 1, q23: 2 };
  // summup: SummUpIntreface = { q0: 0, q1: 1, q23: 0, p0: 0, p1: 1, p23: 0 }
  num: number;
  pre: number;
  constructor(
    // summup: SummUpIntreface
  ) {
    // this.summup = summup;
    this.num = 4;
    this.pre = 2;

  }

  ngOnInit(): void {
  }

}
