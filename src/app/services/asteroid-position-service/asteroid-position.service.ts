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
  setPositionList(steps: number, radius: number = 40): AsteroidPosition {
    const centerX = 50;
    const centerY = 50;
    let xValues: Array<number> = []
    let yValues: Array<number> = []
    for (var i: number = 1; i < steps; i++) {
      const rnd = (Math.random() - 0.5) * 20

      xValues[i] = (centerX + radius * Math.cos(2 * Math.PI * i / (steps - 1))) + rnd;
      yValues[i] = (centerY + radius * Math.sin(2 * Math.PI * i / steps)) + rnd;
      xValues[i] = Math.round(this.preventOverflow(xValues[i]))
      yValues[i] = Math.round(this.preventOverflow(yValues[i]))
    }
    const rnd = (Math.random() - 0.5) * 10
    xValues[0] = 50 + rnd; yValues[0] = 50 + rnd;

    return { xValues, yValues }
  }
}
