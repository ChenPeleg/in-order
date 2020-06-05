import { Component, OnInit } from '@angular/core';
import { SummaryModel } from "../models/summary.model"
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  // num: object = { q0: 0, q1: 1, q23: 0 };
  // pre: object = { q0: 0, q1: 1, q23: 2 };
  summup: SummaryModel = { q0: 0, q1: 1, q23: 0, p0: 0, p1: 1, p23: 0 }
  num: number;
  pre: number;
  constructor() {
    this.summup = { q0: 0, q1: 1, q23: 0, p0: 0, p1: 1, p23: 0 }
    this.num = 4;
    this.pre = 2;

  }

  ngOnInit(): void {
  }

}
