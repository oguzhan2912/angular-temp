import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostworkformComponent } from './postworkform.component';

describe('PostworkformComponent', () => {
  let component: PostworkformComponent;
  let fixture: ComponentFixture<PostworkformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostworkformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostworkformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
