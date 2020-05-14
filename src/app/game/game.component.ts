import { Component, OnInit, HostListener } from '@angular/core';
import { AsteroidPositionService } from "../services/asteroid-position.service"
import *  as  data from '../../assets/questions.json';
import { Asteroid } from "./asteroid.model";
import { AsteroidPosition } from "../game/asteroidPosition.model"
import { Laser } from "./laser.model";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: [AsteroidPositionService]
})
export class GameComponent implements OnInit {

  asteroids: Asteroid[];
  questionNumber: number
  currenQuestionText: string;
  nextCorrect: number;
  namesArr: Array<string>;
  laserData: Laser;
  public innerWidth: any;

  constructor(private positionService: AsteroidPositionService) {
    this.questionNumber = 1;
    this.nextCorrect = 0;
    this.namesArr = ['one', 'two', "three", "four", "five",]// "six", "seven", "eight", "nine", "ten"]
    this.laserData = { showLaser: false, laserX: 0, laserY: 0 }

  }
  ngOnInit(): void {
    console.log(data.questions[1].text)
    this.currenQuestionText = data.questions[1].text;
    this.asteroids = this.setAstroidData()
    this.innerWidth = window.innerWidth;
  }
  spacePressHandler(): void {
    this.asteroids = this.setAstroidData();
  }
  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    event.code === "Space" ? this.spacePressHandler() : null
  }
  asteroidClickHandler(clickData: { index: number }): void {
    if (clickData.index === this.nextCorrect) { this.correctHandler(clickData.index) } else { this.wrongHandler(clickData.index) }
  }
  @HostListener('document:mousemove', ['$event'])
  mousemoveEventHandler(event: MouseEvent): void {
    if (this.laserData.showLaser) {
      this.laserData.laserX = event.clientX + 10;
      this.laserData.laserY = event.clientY + 14;
      this.laserData.laserAngle = (event.clientX - (this.innerWidth / 2)) / 10;
    }
  }
  asteroidHoverHandler(hoverData: { isOn: boolean }): void {
    if (this.laserData.laserFiring && !this.laserData.showLaser) { return }
    this.laserData.showLaser = hoverData.isOn;

  }
  setAstroidData(): Array<Asteroid> {
 
    let namesArr: Array<string> = this.namesArr
    const steps: number = namesArr.length + 2 * Math.random();
    const { xValues, yValues }: AsteroidPosition = this.positionService.setPositionList(steps);
    
    let asteroidArray: Array<Asteroid> = namesArr.map(n => { return { left: xValues[namesArr.indexOf(n)], bottom: yValues[namesArr.indexOf(n)], text: n, index: namesArr.indexOf(n), destroy: false } });

    return asteroidArray
  }
  correctHandler(num: number): void {
    this.explodeAsteroid(num)
    this.nextCorrect = this.nextCorrect + 1;
    while (this.nextCorrect < this.asteroids.length && this.asteroids[this.nextCorrect].destroy) {
      this.nextCorrect++
    }
    if (this.nextCorrect === this.asteroids.length) {
      alert('next Question')
    }
  }
  wrongHandler(num: number): void {
    if (this.asteroids[num].warm) {
      this.explodeAsteroid(num)
    } else {
      this.asteroids[num].warm = true
    }
  }
  explodeAsteroid(num: number) {
    this.asteroids[num].destroy = true
    this.laserData.laserFiring = true;
    setTimeout(() => {
      this.laserData.laserFiring = false;
      this.asteroids[num].explode = true
      setTimeout(() => { this.asteroids[num].removed = true }, 1000)
    }, 600)
  }

}
