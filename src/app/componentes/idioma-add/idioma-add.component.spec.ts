import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiomaAddComponent } from './idioma-add.component';

describe('IdiomaAddComponent', () => {
  let component: IdiomaAddComponent;
  let fixture: ComponentFixture<IdiomaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdiomaAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdiomaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
