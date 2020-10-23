import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeplacementsExterieursComponent } from './deplacements-exterieurs.component';

describe('DeplacementsExterieursComponent', () => {
  let component: DeplacementsExterieursComponent;
  let fixture: ComponentFixture<DeplacementsExterieursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeplacementsExterieursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeplacementsExterieursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
