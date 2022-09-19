import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDegreeSchoolComponent } from './post-degree-school.component';

describe('PostDegreeSchoolComponent', () => {
  let component: PostDegreeSchoolComponent;
  let fixture: ComponentFixture<PostDegreeSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDegreeSchoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDegreeSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
