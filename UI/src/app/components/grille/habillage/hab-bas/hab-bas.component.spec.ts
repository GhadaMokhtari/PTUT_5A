import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabBasComponent } from './hab-bas.component';

describe('HabBasComponent', () => {
  let component: HabBasComponent;
  let fixture: ComponentFixture<HabBasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabBasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabBasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
