import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviTraitementComponent } from './suivi-traitement.component';

describe('SuiviTraitementComponent', () => {
  let component: SuiviTraitementComponent;
  let fixture: ComponentFixture<SuiviTraitementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviTraitementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviTraitementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
