import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCusComponent } from './create-cus.component';

describe('CreateCusComponent', () => {
  let component: CreateCusComponent;
  let fixture: ComponentFixture<CreateCusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
