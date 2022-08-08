import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkmodalComponent } from './workmodal.component';

describe('WorkmodalComponent', () => {
  let component: WorkmodalComponent;
  let fixture: ComponentFixture<WorkmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
