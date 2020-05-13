import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-laser',
  templateUrl: './laser.component.html',
  styleUrls: ['./laser.component.scss']
})
export class LaserComponent implements OnInit {

  @Input()
  laserData: { showLaser: boolean, laserX: number, laserY: number };

  constructor() {

  }

  ngOnInit(): void {
  }

}
