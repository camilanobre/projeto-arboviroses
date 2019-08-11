import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Conduta2dPage } from './conduta2d.page';

describe('Conduta2dPage', () => {
  let component: Conduta2dPage;
  let fixture: ComponentFixture<Conduta2dPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Conduta2dPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Conduta2dPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
