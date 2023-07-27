import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeancesListComponent } from './seances-list.component';

describe('SeancesListComponent', () => {
  let component: SeancesListComponent;
  let fixture: ComponentFixture<SeancesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeancesListComponent]
    });
    fixture = TestBed.createComponent(SeancesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
