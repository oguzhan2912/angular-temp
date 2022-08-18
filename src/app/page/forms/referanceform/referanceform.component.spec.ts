import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferanceformComponent } from './referanceform.component';

describe('ReferanceformComponent', () => {
  let component: ReferanceformComponent;
  let fixture: ComponentFixture<ReferanceformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferanceformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferanceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
