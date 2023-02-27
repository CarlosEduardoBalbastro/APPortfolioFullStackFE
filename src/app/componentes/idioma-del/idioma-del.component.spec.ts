import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiomaDelComponent } from './idioma-del.component';

describe('IdiomaDelComponent', () => {
  let component: IdiomaDelComponent;
  let fixture: ComponentFixture<IdiomaDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdiomaDelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdiomaDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
