import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeplacementsInterieursComponent } from './deplacements-interieurs.component';

describe('DeplacementsInterieursComponent', () => {
  let component: DeplacementsInterieursComponent;
  let fixture: ComponentFixture<DeplacementsInterieursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeplacementsInterieursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeplacementsInterieursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
