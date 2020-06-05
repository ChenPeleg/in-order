import { Injectable } from '@angular/core';
import { SummaryModel } from "../../models/summary.model"
import { GamecontrollerService } from "../game-controller/gamecontroller.service"
interface SuccesByQuest { q0: number, q1: number, q23: number }
interface SuccesByPrecent { p0: number, p1: number, p23: number }
@Injectable({
  providedIn: 'root'
  // providers: [GamecontrollerService]
})

export class SummaryService {


  constructor(private GamecontrollerService: GamecontrollerService) { }
  createSummaryObject(successArr: number[]): SuccesByQuest {
    let mistakesObject: SuccesByQuest = { q0: 0, q1: 0, q23: 0 }
    const sumArray = successArr.filter(el => true)
    let numOfquestions = sumArray.length;
    for (let i = 0; i < sumArray.length; i++) {
      if (sumArray[i] === 0) { mistakesObject.q0++ }
      else if (sumArray[i] === 1) { mistakesObject.q1++ }
      else { mistakesObject.q23++ }
    }
    return mistakesObject;
  }
  roundTo100(mObj: SuccesByPrecent): SuccesByPrecent {
    const values = Object.values(mObj);
    if (
      values.reduce((a, b) => {
        return a + b;
      }, 0) === 100
    ) {
      return mObj;
    } else {
      const min = Math.min(...values.filter((el) => el > 0));
      for (const k of Object.keys(mObj)) {
        if (mObj[k] === min) {
          mObj[k] = mObj[k] + 1;
          return this.roundTo100(mObj);
        }
      }
    }
  }



  getSummary(): SummaryModel {
    const pre = (part: number, base: number): number => Math.round(part / base * 100)
    const success = this.GamecontrollerService.getCurrentSuccess();
    const numOfQ: number = success.filter(el => true).length
    const succByQ: SuccesByQuest = this.createSummaryObject(success)
    const succesbyPrecentage: SuccesByPrecent = {
      p0: pre(succByQ.q0, numOfQ),
      p1: pre(succByQ.q1, numOfQ),
      p23: pre(succByQ.q23, numOfQ),
    }
    console.log(succesbyPrecentage)
    return { q0: 3, q1: 1, q23: 100, p0: 0, p1: 1, p23: 0, text: ["Very Good!", "you've finished the game"] }
  }
}
