import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VentaProductosPage } from './venta-productos.page';

describe('VentaProductosPage', () => {
  let component: VentaProductosPage;
  let fixture: ComponentFixture<VentaProductosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
