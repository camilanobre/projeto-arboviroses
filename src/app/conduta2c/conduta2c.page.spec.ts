import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Conduta2cPage } from './conduta2c.page';

describe('Conduta2cPage', () => {
  let component: Conduta2cPage;
  let fixture: ComponentFixture<Conduta2cPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Conduta2cPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Conduta2cPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
