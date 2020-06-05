import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  constructor() { }
  createSummaryObject(allQuestions) {
    let numOfquestions = 0;
    let mistakesObject = { q0: 0, q1: 0, q23: 0 };
    const sumArray = allQuestions.filter((el) => el.includes("RIGHT"));
    for (let i = 0; i < sumArray.length; i++) {
      const wrongs = sumArray[i].filter((el) => el === "WRONG").length;
      const rights = sumArray[i].filter((el) => el === "RIGHT").length;
      let mistakeCound = wrongs < 2 ? "q" + wrongs : "q23";
      mistakesObject[mistakeCound] += 1;
      numOfquestions += rights;
    }

    return { mistakesObject, numOfquestions };
  }
}
