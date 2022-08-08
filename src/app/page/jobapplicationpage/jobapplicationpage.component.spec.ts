import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobapplicationpageComponent } from './jobapplicationpage.component';

describe('JobapplicationpageComponent', () => {
  let component: JobapplicationpageComponent;
  let fixture: ComponentFixture<JobapplicationpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobapplicationpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobapplicationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
