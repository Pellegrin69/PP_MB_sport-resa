import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSeancesComponent } from './admin-seances.component';

describe('AdminSeancesComponent', () => {
  let component: AdminSeancesComponent;
  let fixture: ComponentFixture<AdminSeancesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSeancesComponent]
    });
    fixture = TestBed.createComponent(AdminSeancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
