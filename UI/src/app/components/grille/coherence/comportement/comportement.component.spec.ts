import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComportementComponent } from './comportement.component';

describe('ComportementComponent', () => {
  let component: ComportementComponent;
  let fixture: ComponentFixture<ComportementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComportementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComportementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
