import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Poo } from './poo';

describe('Poo', () => {
  let component: Poo;
  let fixture: ComponentFixture<Poo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Poo],
    }).compileComponents();

    fixture = TestBed.createComponent(Poo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
