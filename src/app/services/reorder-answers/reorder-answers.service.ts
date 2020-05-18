import { Injectable } from '@angular/core';
import { Asteroid } from "../../models/asteroid.model";
import { AsteroidPosition } from "../../models/asteroidPosition.model";
interface Asteroids extends Array<Asteroid> { }


@Injectable({
  providedIn: 'root'
})

export class ReorderAnswersService {

  asteroids: Asteroids;

  constructor() { }
  reorderAnswers(unordered: Asteroids): Asteroids {
    const wasReorderCompletely = (arr1: Asteroids, arr2: Asteroids) => {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].index === arr2[i].index) {
          return false;
        }
        return true;
      }
    };
    let newAnswersObject = [...unordered];
    newAnswersObject.sort(() => Math.random() - 0.5);

    return wasReorderCompletely(newAnswersObject, unordered)
      ? newAnswersObject
      : this.reorderAnswers(unordered);
  }
  reorderPositions(unordered: [{ x: number, y: number }]): [{ x: number, y: number }] {
    const wasReorderCompletely = (arr1: [{ x: number, y: number }], arr2: [{ x: number, y: number }]) => {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].x === arr2[i].x && arr1[i].y === arr2[i].y) {
          return false;
        }
        return true;
      }
    };
    let newAnswersObject = [...unordered];
    newAnswersObject.sort(() => Math.random() - 0.5);

    return wasReorderCompletely(newAnswersObject, unordered)
      ? newAnswersObject
      : this.reorderPositions(unordered);
  }

}
