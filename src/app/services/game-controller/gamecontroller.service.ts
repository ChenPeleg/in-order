import { Injectable } from '@angular/core';
import *  as  data from '../../../assets/questions.json';
@Injectable({
  providedIn: 'root'
})
export class GamecontrollerService {
  questionNum: number;
  successArray: number[];
  feedbackHistory: string[];
  constructor() { this.questionNum = 1, this.successArray = [], this.feedbackHistory = [] }
  private arrayRandom(arr: Array<string>): string {
    const randomElement = (): string => arr[Math.floor(Math.random() * arr.length)];
    let feedBack: string;
    for (let i: number = 0; i < 4; i++) {
      feedBack = randomElement();
      if (feedBack !== this.feedbackHistory[this.questionNum + 1]) { break };
    }
    return feedBack
  }
  setNextQuestion(mistakes: number): any {
    this.successArray[this.questionNum] = mistakes;
    this.questionNum = this.questionNum + 1;
    console.log(this.successArray)
  }
  getCurrentQuestion(): any {
    return data.questions[this.questionNum].text
  }
  getCurrentAnswers(): any {
    return [...data.questions[this.questionNum].answers]
  }
  feedBackText(): string {
    const randGood = ["Very Good!", "Great!", "You're a champ!", "Amazing!", "Smart!"]
    const randBad = ["Next time...", "try again...", "Think again...", "Not exactly", "Smart!"]
    const randAvrge = ["Almost..", "That was close.."]
    const randAgain = ["two in a row!", "That was close.."]
    return this.arrayRandom(randGood)
    return "Good!"

  }

}
