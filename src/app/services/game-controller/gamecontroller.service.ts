import { Injectable } from '@angular/core';
import *  as  data from '../../../assets/questions.json';
@Injectable({
  providedIn: 'root'
})
export class GamecontrollerService {
  questionNum: number;
  constructor() { this.questionNum = 1 }
  getCurrentQuestion(): any {
    return data.questions[this.questionNum].text
  }
  getCurrentAnswers(): any {
    return [...data.questions[this.questionNum].answers]
  }

}
