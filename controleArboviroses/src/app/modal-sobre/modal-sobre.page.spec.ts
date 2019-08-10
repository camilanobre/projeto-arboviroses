import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSobrePage } from './modal-sobre.page';

describe('ModalSobrePage', () => {
  let component: ModalSobrePage;
  let fixture: ComponentFixture<ModalSobrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSobrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSobrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
