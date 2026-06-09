import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstruturaDeControles } from './estrutura-de-controles';

describe('EstruturaDeControles', () => {
  let component: EstruturaDeControles;
  let fixture: ComponentFixture<EstruturaDeControles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstruturaDeControles],
    }).compileComponents();

    fixture = TestBed.createComponent(EstruturaDeControles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
