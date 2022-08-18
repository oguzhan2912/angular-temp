import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralformComponent } from './generalform.component';

describe('GeneralformComponent', () => {
  let component: GeneralformComponent;
  let fixture: ComponentFixture<GeneralformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
