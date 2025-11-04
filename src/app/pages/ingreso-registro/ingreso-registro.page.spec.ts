import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresoRegistroPage } from './ingreso-registro.page';

describe('IngresoRegistroPage', () => {
  let component: IngresoRegistroPage;
  let fixture: ComponentFixture<IngresoRegistroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
