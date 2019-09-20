import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuvidasfrequentesPage } from './duvidasfrequentes.page';

describe('DuvidasfrequentesPage', () => {
  let component: DuvidasfrequentesPage;
  let fixture: ComponentFixture<DuvidasfrequentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuvidasfrequentesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuvidasfrequentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
