import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Conduta2aPage } from './conduta2a.page';

describe('Conduta2aPage', () => {
  let component: Conduta2aPage;
  let fixture: ComponentFixture<Conduta2aPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Conduta2aPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Conduta2aPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
