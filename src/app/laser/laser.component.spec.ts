import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LaserComponent} from './laser.component';
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";

describe('LaserComponent', () => {
  let component: LaserComponent;
  let fixture: ComponentFixture<LaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
                                     declarations: [LaserComponent],
      imports: [BrowserModule, HttpClientModule]
                                   })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
