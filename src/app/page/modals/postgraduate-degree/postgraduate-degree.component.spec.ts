import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostgraduateDegreeComponent } from './postgraduate-degree.component';

describe('PostgraduateDegreeComponent', () => {
  let component: PostgraduateDegreeComponent;
  let fixture: ComponentFixture<PostgraduateDegreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostgraduateDegreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostgraduateDegreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
