import { Component, OnInit } from '@angular/core';
import { SummaryModel } from "../models/summary.model"
import { SummaryService } from "../services/summary/summary.service"
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  providers: [SummaryService]
})
export class SummaryComponent implements OnInit {

  // num: object = { q0: 0, q1: 1, q23: 0 };
  // pre: object = { q0: 0, q1: 1, q23: 2 };
  summup: SummaryModel = { q0: 0, q1: 1, q23: 0, p0: 0, p1: 1, p23: 0 }
  num: number;
  pre: number;
  pre1: number;
  constructor(private SummaryService: SummaryService) {
    this.summup = SummaryService.getSummary()
    this.num = 4;
    this.pre = 2;
    this.pre1 = 4;
  }

  ngOnInit(): void {
  }

}
