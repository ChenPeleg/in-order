import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sound-btn',
  templateUrl: './sound-btn.component.html',
  styleUrls: ['./sound-btn.component.scss']
})
export class SoundBtnComponent implements OnInit {
  soundImage: string = "../../../assets/images/volumeon.png"
  soundOnImage: string = "../../../assets/images/volumeon.png"
  soundOffImage: string = "../../../assets/images/volumeoff.png"

  constructor() { }
  clickSound() {
    alert('click')
  }
  ngOnInit(): void {
    
  }

}
