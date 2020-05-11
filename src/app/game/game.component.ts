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
  }
  ngOnInit(): void {
    console.log(data.questions[1].text)
    this.currenQuestionText = data.questions[1].text;
    this.asteroids = this.setAstroidData()


  }
  asteroidClickHandler(clickData: { index: number }): void {
    if (clickData.index === this.nextCorrect) { this.correctHandler(clickData.index) } else { this.wrongHandler(clickData.index) }

  }
  setAstroidData(): Array<Asteroid> {
    const namesArr: Array<string> = ['one', 'two', "three", "four", "five", "six", "seven", "eight", "nine", "ten"]

    const steps: number = 10;
    const centerX = 50;
    const centerY = 50;
    const radius = 35;
    let xValues: Array<number> = []
    let yValues: Array<number> = []
    for (var i: number = 0; i < steps; i++) {
      xValues[i] = (centerX + radius * Math.cos(2 * Math.PI * i / steps));
      yValues[i] = (centerY + radius * Math.sin(2 * Math.PI * i / steps));
    }
    const arr1: Array<Asteroid> = namesArr.map(n => { return { left: namesArr.indexOf(n) * 8, bottom: 20, text: n, index: namesArr.indexOf(n), destroy: false } })

    let arr = [...arr1];
    //  [
    //   { left: 10, bottom: 20, text: data.questions[1].answers[0], index: 0, destroy: false },
    //   { left: 40, bottom: 50, text: data.questions[1].answers[1], index: 1, destroy: false },
    //   { left: 70, bottom: 20, text: data.questions[1].answers[2], index: 2, destroy: false }];
    return arr
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
