import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Conduta1aPage } from './conduta1a.page';

describe('Conduta1aPage', () => {
  let component: Conduta1aPage;
  let fixture: ComponentFixture<Conduta1aPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Conduta1aPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Conduta1aPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
