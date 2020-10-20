import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoherenceOuiComponent } from './coherence-oui.component';

describe('CoherenceOuiComponent', () => {
  let component: CoherenceOuiComponent;
  let fixture: ComponentFixture<CoherenceOuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoherenceOuiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoherenceOuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
