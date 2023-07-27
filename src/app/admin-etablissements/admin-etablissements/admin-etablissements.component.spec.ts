import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEtablissementsComponent } from './admin-etablissements.component';

describe('AdminEtablissementsComponent', () => {
  let component: AdminEtablissementsComponent;
  let fixture: ComponentFixture<AdminEtablissementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEtablissementsComponent]
    });
    fixture = TestBed.createComponent(AdminEtablissementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
