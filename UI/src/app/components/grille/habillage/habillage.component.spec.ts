import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabillageComponent } from './habillage.component';

describe('HabillageComponent', () => {
  let component: HabillageComponent;
  let fixture: ComponentFixture<HabillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabillageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
