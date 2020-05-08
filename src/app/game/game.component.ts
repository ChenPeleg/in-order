import { Component, OnInit } from '@angular/core';
import *  as  data from '../../assets/questions.json';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  asteriodLeft: number = 10;
  constructor() {

  }
  questiontext = data.questions[1].text
  ngOnInit(): void {
    console.log(data.questions)
  }

}
