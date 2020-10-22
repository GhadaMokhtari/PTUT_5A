import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabHautComponent } from './hab-haut.component';

describe('HabHautComponent', () => {
  let component: HabHautComponent;
  let fixture: ComponentFixture<HabHautComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabHautComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabHautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
