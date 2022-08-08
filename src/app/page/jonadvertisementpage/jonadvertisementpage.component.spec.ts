import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JonadvertisementpageComponent } from './jonadvertisementpage.component';

describe('JonadvertisementpageComponent', () => {
  let component: JonadvertisementpageComponent;
  let fixture: ComponentFixture<JonadvertisementpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JonadvertisementpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JonadvertisementpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
