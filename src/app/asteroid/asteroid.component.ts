import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-asteroid',
  templateUrl: './asteroid.component.html',
  styleUrls: ['./asteroid.component.scss']
})
export class AsteroidComponent implements OnInit {
  @Output() clickAstro = new EventEmitter<{ index: number }>();
  @Input() astData: { left: number, bottom: number, text: string, index: number }
  astSrc: Array<string>;
  imageSrc: string;
  isReversed: boolean;
  rotationSpeed: string;
  constructor() {
    this.astSrc = ["../../assets/images/astro (", "", ").png"]
  }
  onClickAsteroid() {
    //alert("ast")
    this.clickAstro.emit({ index: this.astData.index })
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
    this.imageSrc = this.getImg()
    this.isReversed = this.getRotationDir()
    this.rotationSpeed = this.getRotationspeed()
  }

}
