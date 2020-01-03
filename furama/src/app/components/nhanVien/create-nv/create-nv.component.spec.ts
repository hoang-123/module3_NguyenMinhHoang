import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNVComponent } from './create-nv.component';

describe('CreateNVComponent', () => {
  let component: CreateNVComponent;
  let fixture: ComponentFixture<CreateNVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
