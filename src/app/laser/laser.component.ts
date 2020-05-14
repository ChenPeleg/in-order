import { Component, OnInit, Input } from '@angular/core';
import { Laser } from "../models/laser.model";

@Component({
  selector: 'app-laser',
  templateUrl: './laser.component.html',
  styleUrls: ['./laser.component.scss']
})
export class LaserComponent implements OnInit {

  @Input() laserData: Laser;

  constructor() {

  }

  ngOnInit(): void {
  }

}
