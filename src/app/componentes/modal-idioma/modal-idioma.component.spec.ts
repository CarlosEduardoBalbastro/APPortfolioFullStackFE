import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIdiomaComponent } from './modal-idioma.component';

describe('ModalIdiomaComponent', () => {
  let component: ModalIdiomaComponent;
  let fixture: ComponentFixture<ModalIdiomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalIdiomaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalIdiomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
