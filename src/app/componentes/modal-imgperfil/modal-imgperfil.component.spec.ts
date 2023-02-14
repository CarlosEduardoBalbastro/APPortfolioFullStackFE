import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalImgperfilComponent } from './modal-imgperfil.component';

describe('ModalImgperfilComponent', () => {
  let component: ModalImgperfilComponent;
  let fixture: ComponentFixture<ModalImgperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalImgperfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalImgperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
