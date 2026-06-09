import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Variaveis } from './variaveis';

describe('Variaveis', () => {
  let component: Variaveis;
  let fixture: ComponentFixture<Variaveis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Variaveis],
    }).compileComponents();

    fixture = TestBed.createComponent(Variaveis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
