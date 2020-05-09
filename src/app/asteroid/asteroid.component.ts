import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-asteroid',
  templateUrl: './asteroid.component.html',
  styleUrls: ['./asteroid.component.scss']
})
export class AsteroidComponent implements OnInit {
  @Input() astData: { left: number, bottom: number, text: string }
  astSrc: Array<string>;
  constructor() {
    this.astSrc = ["../../assets/images/astro (", "", ").png"]

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
  getImg() {
    const maxNum = 10;
    const num = Math.ceil((Math.random() * maxNum))
    const src = [...this.astSrc];
    src[1] = num.toString();
    return src.join('')
  }
  getRotationspeed() {
    const baseSpeed: number = 20;
    const rand = Math.random() - 0.5
    return (baseSpeed + rand * baseSpeed) + "s"
  }
  getRotationDir() {
    const rand = Math.random() - 0.5
    return rand > 0
  }

  ngOnInit(): void {
  }

}
