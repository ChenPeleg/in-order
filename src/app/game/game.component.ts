import { Component, OnInit, HostListener } from '@angular/core';
import *  as  data from '../../assets/questions.json';
import { Asteroid } from "../models/asteroid.model";
import { AsteroidPosition } from "../models/asteroidPosition.model"
import { AsteroidPositionService } from "../services/asteroid-position-service/asteroid-position.service"
import { Laser } from "../models/laser.model";
import { LaserPositionService } from "../services/laser-position-service/laser-position.service";
import { GamecontrollerService } from "../services/game-controller/gamecontroller.service"
import { ReorderPositionsService } from "../services/reorder-positions/reorder-positions.service"
// import { BigMessageComponent } from "../big-message/big-message.component"
// import { ConsoleReporter } from 'jasmine';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: [AsteroidPositionService, ReorderPositionsService, GamecontrollerService]
})
export class GameComponent implements OnInit {

  asteroids: Asteroid[];
  questionNumber: number
  currenQuestionText: string;
  nextCorrect: number;
  feedbackMsg: string;
  displayBigMessage: boolean;
  laserData: Laser;
  mistakes: number;
  gameStatus: string;

  public innerWidth: any;
  public innerHeight: any;

  constructor(private asteroidPositionSrv: AsteroidPositionService, private laserPositionSrv: LaserPositionService, private gamecontrollerService: GamecontrollerService, private reorderAst: ReorderPositionsService, private ReorderPositionsService: ReorderPositionsService) {
    this.gameStatus = "play"
    this.questionNumber = 1;
    this.nextCorrect = 0;
    this.mistakes = 0;
    this.feedbackMsg = "Almost!"
    this.laserData = { showLaser: false, laserX: 0, laserY: 0 }

    this.displayBigMessage = false;
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
    event.code === "Digit1" ? this.asteroidClickHandler({ index: this.nextCorrect }) : null
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
    const positionsXY: Array<AsteroidPosition> = this.asteroidPositionSrv.setPositionList(answers.length);

    const reorderedPositions: Array<AsteroidPosition> = this.ReorderPositionsService.reorderPositions(positionsXY);
    const popOrder = answers.map((n: any): number[] => answers.indexOf(n)).sort(() => Math.random() - 0.5);

    let asteroidArray: Array<Asteroid> = answers.map(n => { return { left: reorderedPositions[answers.indexOf(n)].x, bottom: reorderedPositions[answers.indexOf(n)].y, text: n, index: answers.indexOf(n), destroy: false, order: popOrder[answers.indexOf(n)] } });

    return asteroidArray
  }
  correctHandler(num: number): void {

    this.explodeAsteroid(num)
    this.nextCorrect = this.nextCorrect + 1;
    while (this.nextCorrect < this.asteroids.length && this.asteroids[this.nextCorrect].destroy) {
      this.nextCorrect++
    }
    if (this.nextCorrect >= this.asteroids.length) {
      setTimeout(() => { this.feedbackHandler() }, 1000)

    }
  }
  feedbackHandler(): void {
    this.displayBigMessage = true;
    this.nextCorrect = 0;
    this.feedbackMsg = this.gamecontrollerService.feedBackText(this.mistakes)

    setTimeout(() => {
      this.displayBigMessage = false;
      this.nextQuestionHandler();
    }, 2000)

  }
  nextQuestionHandler(): void {

    this.gamecontrollerService.setNextQuestion(this.mistakes);
    this.asteroids = this.setAstroidData();
    this.mistakes = 0;
    this.currenQuestionText = this.gamecontrollerService.getCurrentQuestion();
  }
  wrongHandler(num: number): void {
    this.mistakes = this.mistakes + 1
    if (this.asteroids[num].warm) {
      this.explodeAsteroid(num)
    } else {
      this.asteroids[num].warm = true
    }
  }
  explodeAsteroid(num: number): void {
    if (!this.asteroids[num]) return;
    this.asteroids[num].destroy = true;
    this.laserData.laserFiring = true;
    setTimeout(() => {
      if (!this.asteroids[num]) return;
      this.laserData.laserFiring = false;
      this.asteroids[num].explode = true
      setTimeout(() => {
        if (!this.asteroids[num]) return;
        this.asteroids[num].removed = true
      }, 800)
    }, 300)
  }

}
