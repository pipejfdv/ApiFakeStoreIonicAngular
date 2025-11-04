import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroFormularioPage } from './registro-formulario.page';

describe('RegistroFormularioPage', () => {
  let component: RegistroFormularioPage;
  let fixture: ComponentFixture<RegistroFormularioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroFormularioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
