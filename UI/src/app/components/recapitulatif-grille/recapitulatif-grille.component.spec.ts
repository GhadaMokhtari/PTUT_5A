import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapitulatifGrilleComponent } from './recapitulatif-grille.component';

describe('RecapitulatifGrilleComponent', () => {
  let component: RecapitulatifGrilleComponent;
  let fixture: ComponentFixture<RecapitulatifGrilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecapitulatifGrilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapitulatifGrilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
