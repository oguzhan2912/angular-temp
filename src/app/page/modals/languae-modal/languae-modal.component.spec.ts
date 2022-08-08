import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguaeModalComponent } from './languae-modal.component';

describe('LanguaeModalComponent', () => {
  let component: LanguaeModalComponent;
  let fixture: ComponentFixture<LanguaeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguaeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguaeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
