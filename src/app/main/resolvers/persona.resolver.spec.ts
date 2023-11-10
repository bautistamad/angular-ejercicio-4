import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { personaResolver } from './persona.resolver';

describe('personaResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => personaResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
