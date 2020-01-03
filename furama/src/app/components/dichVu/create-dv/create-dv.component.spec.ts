import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDvComponent } from './create-dv.component';

describe('CreateDvComponent', () => {
  let component: CreateDvComponent;
  let fixture: ComponentFixture<CreateDvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
