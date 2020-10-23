import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabMoyenComponent } from './hab-moyen.component';

describe('HabMoyenComponent', () => {
  let component: HabMoyenComponent;
  let fixture: ComponentFixture<HabMoyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabMoyenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabMoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
