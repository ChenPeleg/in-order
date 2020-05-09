import { Component, OnInit } from '@angular/core';
import *  as  data from '../../assets/questions.json';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  astData: { left: number, bottom: number, text: string }
  constructor() {
    this.astData = { left: 10, bottom: -10, text: "one" }
  }
  questiontext = data.questions[1].text
  ngOnInit(): void {
    console.log(data.questions)
  }

}
