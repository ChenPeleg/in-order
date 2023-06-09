import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GamebarComponent} from './gamebar.component';
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";

describe('GamebarComponent', () => {
  let component: GamebarComponent;
  let fixture: ComponentFixture<GamebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GamebarComponent],
      imports: [BrowserModule, HttpClientModule]
    })
      .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(GamebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
