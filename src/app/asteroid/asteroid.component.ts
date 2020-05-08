import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-asteroid',
  templateUrl: './asteroid.component.html',
  styleUrls: ['./asteroid.component.scss']
})
export class AsteroidComponent implements OnInit {
  @Input() left: number;

  constructor() {

  }
  getLeft() {
    return this.left + "%"
  }
  ngOnInit(): void {
  }

}
