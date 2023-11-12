import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteReusableComponent } from './componente-reusable.component';

describe('ComponenteReusableComponent', () => {
  let component: ComponenteReusableComponent;
  let fixture: ComponentFixture<ComponenteReusableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteReusableComponent]
    });
    fixture = TestBed.createComponent(ComponenteReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
