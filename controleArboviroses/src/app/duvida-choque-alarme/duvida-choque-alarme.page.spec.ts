import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuvidaChoqueAlarmePage } from './duvida-choque-alarme.page';

describe('DuvidaChoqueAlarmePage', () => {
  let component: DuvidaChoqueAlarmePage;
  let fixture: ComponentFixture<DuvidaChoqueAlarmePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuvidaChoqueAlarmePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuvidaChoqueAlarmePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
