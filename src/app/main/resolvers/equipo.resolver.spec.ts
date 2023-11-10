import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { equipoResolver } from './equipo.resolver';

describe('equipoResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => equipoResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
