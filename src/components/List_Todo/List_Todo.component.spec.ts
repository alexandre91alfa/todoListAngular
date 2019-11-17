/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { List_TodoComponent } from './List_Todo.component';

describe('List_TodoComponent', () => {
  let component: List_TodoComponent;
  let fixture: ComponentFixture<List_TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ List_TodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(List_TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
