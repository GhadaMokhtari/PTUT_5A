import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FecaleComponent } from './fecale.component';

describe('FecaleComponent', () => {
  let component: FecaleComponent;
  let fixture: ComponentFixture<FecaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FecaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FecaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
