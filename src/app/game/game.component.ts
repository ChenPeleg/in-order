import { Component, OnInit, HostListener } from '@angular/core';
import *  as  data from '../../assets/questions.json';
import { Asteroid } from "../models/asteroid.model";
import { AsteroidPosition } from "../models/asteroidPosition.model"
import { AsteroidPositionService } from "../services/asteroid-position-service/asteroid-position.service"
import { Laser } from "../models/laser.model";
import { LaserPositionService } from "../services/laser-position-service/laser-position.service";
import { GamecontrollerService } from "../services/game-controller/gamecontroller.service"
// import { ConsoleReporter } from 'jasmine';
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

  laserData: Laser;
  public innerWidth: any;
  public innerHeight: any;

  constructor(private asteroidPositionSrv: AsteroidPositionService, private laserPositionSrv: LaserPositionService, private gamecontrollerService: GamecontrollerService) {
    this.questionNumber = 1;
    this.nextCorrect = 0;

    this.laserData = { showLaser: false, laserX: 0, laserY: 0 }

  }
  ngOnInit(): void {
    this.currenQuestionText = this.gamecontrollerService.getCurrentQuestion();
    this.asteroids = this.setAstroidData()
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;

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
      this.laserData = { ...this.laserData, ...this.laserPositionSrv.setLaserPosition(event.clientX, event.clientY, this.innerWidth, this.innerHeight) }
    }
  }
  asteroidHoverHandler(hoverData: { isOn: boolean }): void {
    if (this.laserData.laserFiring && !this.laserData.showLaser) { return }
    this.laserData.showLaser = hoverData.isOn;

  }
  setAstroidData(): Array<Asteroid> {
    const answers = this.gamecontrollerService.getCurrentAnswers()
    let namesArr: Array<string> = answers;

    const steps: number = namesArr.length + 2 * Math.random();

    const { xValues, yValues, positionsXY }: AsteroidPosition = this.asteroidPositionSrv.setPositionList(steps);
    console.log(positionsXY)

    let asteroidArray: Array<Asteroid> = namesArr.map(n => { return { left: positionsXY[namesArr.indexOf(n)].x, bottom: positionsXY[namesArr.indexOf(n)].y, text: n, index: namesArr.indexOf(n), destroy: false } });

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
      setTimeout(() => { this.asteroids[num].removed = true }, 800)
    }, 600)
  }

}
