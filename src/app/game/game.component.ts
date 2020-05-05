import { Component, OnInit } from '@angular/core';
import *  as  questions from '../../assets/questions.json';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(questions)
  }

}
