import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesSalvarPage } from './pacientes-salvar.page';

describe('PacientesSalvarPage', () => {
  let component: PacientesSalvarPage;
  let fixture: ComponentFixture<PacientesSalvarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientesSalvarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesSalvarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
