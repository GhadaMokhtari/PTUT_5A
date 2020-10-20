import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoherenceComponent } from './coherence.component';

describe('CoherenceComponent', () => {
  let component: CoherenceComponent;
  let fixture: ComponentFixture<CoherenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoherenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoherenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
