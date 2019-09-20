import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Conduta2bPage } from './conduta2b.page';

describe('Conduta2bPage', () => {
  let component: Conduta2bPage;
  let fixture: ComponentFixture<Conduta2bPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Conduta2bPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Conduta2bPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
