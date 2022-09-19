import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhdSchoolComponent } from './phd-school.component';

describe('PhdSchoolComponent', () => {
  let component: PhdSchoolComponent;
  let fixture: ComponentFixture<PhdSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhdSchoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhdSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
