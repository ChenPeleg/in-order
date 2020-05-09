import { Component, OnInit } from '@angular/core';
import *  as  data from '../../assets/questions.json';
import { Asteroid } from "./asteroid.model"
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  asteroids: Asteroid[];
  questionNumber: number
  currenQuestionText: string;
  constructor() {
    this.questionNumber = 1;
    this.asteroids = [{ left: 10, bottom: -10, text: "one" }, { left: 40, bottom: -50, text: "two" }]
  }

  ngOnInit(): void {
    console.log(data.questions[1].text)
    this.currenQuestionText = data.questions[1].text
  }

}
