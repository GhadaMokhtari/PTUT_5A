import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationDistanceComponent } from './communication-distance.component';

describe('CommunicationDistanceComponent', () => {
  let component: CommunicationDistanceComponent;
  let fixture: ComponentFixture<CommunicationDistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationDistanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
