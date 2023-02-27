import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiomEditComponent } from './idiom-edit.component';

describe('IdiomEditComponent', () => {
  let component: IdiomEditComponent;
  let fixture: ComponentFixture<IdiomEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdiomEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdiomEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
