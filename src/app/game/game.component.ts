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
  nextCorrect: number;

  constructor() {
    this.questionNumber = 1;
    this.nextCorrect = 0;
    this.asteroids = [
      { left: 10, bottom: 20, text: data.questions[1].answers[0], index: 0, destroy: false },
      { left: 40, bottom: 50, text: data.questions[1].answers[1], index: 1, destroy: false },
      { left: 70, bottom: 20, text: data.questions[1].answers[2], index: 2, destroy: false }];
  }
  ngOnInit(): void {
    console.log(data.questions[1].text)
    this.currenQuestionText = data.questions[1].text
  }
  asteroidClickHandler(clickData: { index: number }): void {
    if (clickData.index === this.nextCorrect) { this.correctHandler(clickData.index) } else { this.wrongHandler(clickData.index) }

  }
  correctHandler(num: number): void {
    this.asteroids[num].destroy = true
    this.nextCorrect = this.nextCorrect + 1;
    while (this.nextCorrect < this.asteroids.length && this.asteroids[this.nextCorrect].destroy) {
      this.nextCorrect++
    }
    console.log(this.nextCorrect)
    if (this.nextCorrect === this.asteroids.length) {
      alert('next Question')
    }
  }
  wrongHandler(num: number): void {
    this.asteroids[num].hot = true
  }

}
