import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { hobbyResolver } from './hobby.resolver';

describe('hobbyResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => hobbyResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
