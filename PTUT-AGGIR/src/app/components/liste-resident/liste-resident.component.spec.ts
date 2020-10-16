import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeResidentComponent } from './liste-resident.component';

describe('ListeResidentComponent', () => {
  let component: ListeResidentComponent;
  let fixture: ComponentFixture<ListeResidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeResidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeResidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
