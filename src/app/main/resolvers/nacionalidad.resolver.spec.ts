import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { nacionalidadResolver } from './nacionalidad.resolver';

describe('nacionalidadResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => nacionalidadResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
