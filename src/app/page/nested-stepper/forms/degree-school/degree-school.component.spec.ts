import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeSchoolComponent } from './degree-school.component';

describe('DegreeSchoolComponent', () => {
  let component: DegreeSchoolComponent;
  let fixture: ComponentFixture<DegreeSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegreeSchoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DegreeSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
