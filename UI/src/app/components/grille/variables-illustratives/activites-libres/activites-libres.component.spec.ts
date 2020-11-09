import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitesLibresComponent } from './activites-libres.component';

describe('ActivitesLibresComponent', () => {
  let component: ActivitesLibresComponent;
  let fixture: ComponentFixture<ActivitesLibresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitesLibresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitesLibresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
