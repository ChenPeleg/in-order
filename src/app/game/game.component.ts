import { Component, OnInit, HostListener } from '@angular/core';
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
  namesArr: Array<string>;



  constructor() {
    this.questionNumber = 1;
    this.nextCorrect = 0;
    this.namesArr = ['one', 'two', "three", "four", "five",]// "six", "seven", "eight", "nine", "ten"]

  }
  ngOnInit(): void {
    console.log(data.questions[1].text)
    this.currenQuestionText = data.questions[1].text;
    this.asteroids = this.setAstroidData()
  }
  spacePressHandler(): void {
    // this.namesArr.pop()
    this.asteroids = this.setAstroidData();

  }
  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    event.code === "Space" ? this.spacePressHandler() : null

  }
  asteroidClickHandler(clickData: { index: number }): void {
    if (clickData.index === this.nextCorrect) { this.correctHandler(clickData.index) } else { this.wrongHandler(clickData.index) }

  }
  setAstroidData(): Array<Asteroid> {
    const preventOverflow = (num: number): number => {
      if (num > 90) { num = 90 } else if (num < 10) { num = 10 }
      return num
    }
    let namesArr: Array<string> = this.namesArr
    const steps: number = namesArr.length + 2 * Math.random();
    const centerX = 50;
    const centerY = 50;
    const radius = 40;
    let xValues: Array<number> = []
    let yValues: Array<number> = []
    for (var i: number = 1; i < steps; i++) {
      xValues[i] = (centerX + radius * Math.cos(2 * Math.PI * i / (steps - 1)));
      yValues[i] = (centerY + radius * Math.sin(2 * Math.PI * i / steps));
    }
    xValues[0] = 50; yValues[0] = 50;
    let arr1: Array<Asteroid> = namesArr.map(n => { return { left: xValues[namesArr.indexOf(n)], bottom: yValues[namesArr.indexOf(n)], text: n, index: namesArr.indexOf(n), destroy: false } });
    arr1 = arr1.map(a => {
      let ast = { ...a };
      const rnd = (Math.random() - 0.5) * 20
      const index = arr1.indexOf(a)
      ast.left = preventOverflow(ast.left + rnd)
      ast.bottom = preventOverflow(ast.bottom + rnd)

      return ast
    })
    let arr = [...arr1];

    return arr
  }
  correctHandler(num: number): void {
    this.asteroids[num].destroy = true
    this.nextCorrect = this.nextCorrect + 1;
    while (this.nextCorrect < this.asteroids.length && this.asteroids[this.nextCorrect].destroy) {
      this.nextCorrect++
    }

    if (this.nextCorrect === this.asteroids.length) {
      alert('next Question')
    }
  }
  wrongHandler(num: number): void {
    if (this.asteroids[num].hot) {
      this.asteroids[num].destroy = true
    } else {
      this.asteroids[num].hot = true
    }
  }

}
