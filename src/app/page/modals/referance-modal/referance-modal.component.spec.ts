import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferanceModalComponent } from './referance-modal.component';

describe('ReferanceModalComponent', () => {
  let component: ReferanceModalComponent;
  let fixture: ComponentFixture<ReferanceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferanceModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferanceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
