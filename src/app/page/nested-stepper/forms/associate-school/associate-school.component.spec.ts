import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateSchoolComponent } from './associate-school.component';

describe('AssociateSchoolComponent', () => {
  let component: AssociateSchoolComponent;
  let fixture: ComponentFixture<AssociateSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociateSchoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociateSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
