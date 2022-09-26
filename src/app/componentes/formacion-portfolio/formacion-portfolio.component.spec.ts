import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionPortfolioComponent } from './formacion-portfolio.component';

describe('FormacionPortfolioComponent', () => {
  let component: FormacionPortfolioComponent;
  let fixture: ComponentFixture<FormacionPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormacionPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormacionPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
