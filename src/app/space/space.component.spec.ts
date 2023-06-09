import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SpaceComponent} from './space.component';
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";

describe('SpaceComponent', () => {
  let component: SpaceComponent;
  let fixture: ComponentFixture<SpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpaceComponent],
      imports: [BrowserModule, HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
