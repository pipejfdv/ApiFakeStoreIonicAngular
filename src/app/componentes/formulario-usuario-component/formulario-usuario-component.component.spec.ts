import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormularioUsuarioComponentComponent } from './formulario-usuario-component.component';

describe('FormularioUsuarioComponentComponent', () => {
  let component: FormularioUsuarioComponentComponent;
  let fixture: ComponentFixture<FormularioUsuarioComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioUsuarioComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioUsuarioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
