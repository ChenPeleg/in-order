import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-asteroid',
  templateUrl: './asteroid.component.html',
  styleUrls: ['./asteroid.component.scss']
})
export class AsteroidComponent implements OnInit {
  @Input() astData: { left: number, bottom: number, text: string }


  constructor() {

  }
  getLeft() {
    return this.astData.left + "%"
  }
  getBottom() {
    return this.astData.bottom + "%"
  }
  getText() {
    return this.astData.text
  }
  ngOnInit(): void {
  }

}
