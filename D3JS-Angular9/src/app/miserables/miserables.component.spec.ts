/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MiserablesComponent } from './miserables.component';

describe('MiserablesComponent', () => {
  let component: MiserablesComponent;
  let fixture: ComponentFixture<MiserablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiserablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiserablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
