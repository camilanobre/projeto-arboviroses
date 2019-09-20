import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasoSuspeitoPage } from './caso-suspeito.page';

describe('CasoSuspeitoPage', () => {
  let component: CasoSuspeitoPage;
  let fixture: ComponentFixture<CasoSuspeitoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasoSuspeitoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasoSuspeitoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
