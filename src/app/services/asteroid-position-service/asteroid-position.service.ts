import { Injectable } from '@angular/core';
import { AsteroidPosition } from "../../models/asteroidPosition.model"
@Injectable({
  providedIn: 'root'
})
export class AsteroidPositionService {
  position: AsteroidPosition;

  constructor() {

  }
  preventOverflow(num: number): number {
    if (num > 90) { num = 90 } else if (num < 10) { num = 10 }
    return num
  }
  setPositionList(numOfasteroids: number, radius: number = 40): AsteroidPosition {
    const centerX = 50;
    const centerY = 50;
    let x_: number = 0;
    let y_: number = 0;
    let positionsXY: Array<{ x: number, y: number }> = [];
    const steps: number = numOfasteroids + 2 * Math.random();
    //  this helps the asteroiuds not to be in a mathamtical order like a clock but more randome. 

    for (var i: number = 1; i < steps; i++) {
      const rnd = (Math.random() - 0.5) * 20

      x_ = (centerX + radius * Math.cos(2 * Math.PI * i / (steps - 1))) + rnd;
      y_ = (centerY + radius * Math.sin(2 * Math.PI * i / steps)) + rnd;
      x_ = Math.round(this.preventOverflow(x_))
      y_ = Math.round(this.preventOverflow(y_))
      positionsXY[i] = { x: x_, y: y_ }
    }
    // for the asteroid in the center :
    const rnd = (Math.random() - 0.5) * 10
    positionsXY[0] = { x: 50 + rnd, y: 50 + rnd }

    return { positionsXY }
  }
}
