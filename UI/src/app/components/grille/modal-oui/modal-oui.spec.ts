import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOui } from './modal-oui';

describe('ModalOuiComponent', () => {
  let component: ModalOui;
  let fixture: ComponentFixture<ModalOui>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalOui ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOui);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
