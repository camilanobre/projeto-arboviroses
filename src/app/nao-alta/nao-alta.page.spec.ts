import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoAltaPage } from './nao-alta.page';

describe('NaoAltaPage', () => {
  let component: NaoAltaPage;
  let fixture: ComponentFixture<NaoAltaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaoAltaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaoAltaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
