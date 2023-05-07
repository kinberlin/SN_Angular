import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDasheBoardComponent } from './region.component';

describe('EmployeeDasheBoardComponent', () => {
  let component: EmployeeDasheBoardComponent;
  let fixture: ComponentFixture<EmployeeDasheBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDasheBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDasheBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
