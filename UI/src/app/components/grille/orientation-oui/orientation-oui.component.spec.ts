import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientationOuiComponent } from './orientation-oui.component';

describe('OrientationOuiComponent', () => {
  let component: OrientationOuiComponent;
  let fixture: ComponentFixture<OrientationOuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrientationOuiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrientationOuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
