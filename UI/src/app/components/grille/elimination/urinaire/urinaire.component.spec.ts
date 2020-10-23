import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrinaireComponent } from './urinaire.component';

describe('UrinaireComponent', () => {
  let component: UrinaireComponent;
  let fixture: ComponentFixture<UrinaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrinaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrinaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
