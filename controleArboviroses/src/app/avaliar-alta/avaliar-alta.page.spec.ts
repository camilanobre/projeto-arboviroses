import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliarAltaPage } from './avaliar-alta.page';

describe('AvaliarAltaPage', () => {
  let component: AvaliarAltaPage;
  let fixture: ComponentFixture<AvaliarAltaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliarAltaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliarAltaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
