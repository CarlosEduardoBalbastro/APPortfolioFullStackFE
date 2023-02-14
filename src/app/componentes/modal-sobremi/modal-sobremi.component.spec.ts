import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSobremiComponent } from './modal-sobremi.component';

describe('ModalSobremiComponent', () => {
  let component: ModalSobremiComponent;
  let fixture: ComponentFixture<ModalSobremiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSobremiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSobremiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
