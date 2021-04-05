import { TestBed } from '@angular/core/testing';

import { DishesResolver } from './dishes.resolver';

describe('DishesResolver', () => {
  let resolver: DishesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DishesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
