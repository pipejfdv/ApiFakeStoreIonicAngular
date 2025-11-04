import { TestBed } from '@angular/core/testing';

import { UsuariosDB } from './usuarios-db';

describe('UsuariosDB', () => {
  let service: UsuariosDB;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosDB);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
