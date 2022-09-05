import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPhotoModelComponent } from './p-photo-model.component';

describe('PPhotoModelComponent', () => {
  let component: PPhotoModelComponent;
  let fixture: ComponentFixture<PPhotoModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PPhotoModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PPhotoModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
