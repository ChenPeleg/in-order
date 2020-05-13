import { Component, OnInit, Input, EventEmitter, Output, HostListener } from '@angular/core';
import { Asteroid } from "../game/asteroid.model"

@Component({
  selector: 'app-asteroid',
  templateUrl: './asteroid.component.html',
  styleUrls: ['./asteroid.component.scss']
})
export class AsteroidComponent implements OnInit {
  @Output() clickAstro = new EventEmitter<{ index: number }>();
  @Output() hoverAstro = new EventEmitter<{ isOn: boolean }>();

  @Input() astData: Asteroid;
  astSrc: Array<string>;
  imageSrc: string;
  isReversed: boolean;
  rotationSpeed: string;
  constructor() {
    this.astSrc = ["../../assets/images/astro (", "", ").png"]
  }

  mouseEnterAsteroid(event: any) {
    this.hoverAstro.emit({ isOn: true })
  }
  mouseExitAsteroid(event: any) {
    console.log(event.toElement)
    this.hoverAstro.emit({ isOn: false })
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
