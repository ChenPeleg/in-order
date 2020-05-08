import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AsteroidComponent } from './asteroid/asteroid.component';
import { SpaceComponent } from './space/space.component';
import { GameComponent } from './game/game.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    AsteroidComponent,
    SpaceComponent,
    GameComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
