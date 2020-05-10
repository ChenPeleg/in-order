import { Component, OnInit, EventEmitter } from '@angular/core';
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
    this.asteroids = [
      { left: 10, bottom: 20, text: data.questions[1].answers[0], index: 0 },
      { left: 40, bottom: 50, text: data.questions[1].answers[1], index: 1 },
      { left: 70, bottom: 20, text: data.questions[1].answers[2], index: 2 }];
  }
  ngOnInit(): void {
    console.log(data.questions[1].text)
    this.currenQuestionText = data.questions[1].text
  }
  asteroidClickHandler(clickData: { index: number }) {

    // this.asteroids.splice(clickData.index, 1);
    this.asteroids[clickData.index].destroy = true
    console.log(clickData.index, this.asteroids)

  }

}
