import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicoesEspeciaisPage } from './condicoes-especiais.page';

describe('CondicoesEspeciaisPage', () => {
  let component: CondicoesEspeciaisPage;
  let fixture: ComponentFixture<CondicoesEspeciaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondicoesEspeciaisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicoesEspeciaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
