import { Injectable } from '@angular/core';
import { LaserPosition } from "../../models/laserPosition.model"
@Injectable({
  providedIn: 'root'
})
export class LaserPositionService {
  constructor() { }
  setLaserPosition(clientX: number, clientY: number, innerWidth: number, innerHeight: number): LaserPosition {
    const laserX = clientX + 10;
    const laserY = clientY + 14;
    const laserAngle = (clientX - innerWidth / 2) / 10;
    let laserPos: LaserPosition = { laserX, laserY, laserAngle };
    return laserPos
  }

}
