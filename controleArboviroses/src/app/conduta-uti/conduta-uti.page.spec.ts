import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondutaUTIPage } from './conduta-uti.page';

describe('CondutaUTIPage', () => {
  let component: CondutaUTIPage;
  let fixture: ComponentFixture<CondutaUTIPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondutaUTIPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondutaUTIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
