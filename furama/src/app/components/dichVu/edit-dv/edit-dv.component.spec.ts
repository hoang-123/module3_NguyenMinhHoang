import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDvComponent } from './edit-dv.component';

describe('EditDvComponent', () => {
  let component: EditDvComponent;
  let fixture: ComponentFixture<EditDvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
