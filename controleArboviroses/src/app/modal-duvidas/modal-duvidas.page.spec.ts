import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDuvidasPage } from './modal-duvidas.page';

describe('ModalDuvidasPage', () => {
  let component: ModalDuvidasPage;
  let fixture: ComponentFixture<ModalDuvidasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDuvidasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDuvidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
