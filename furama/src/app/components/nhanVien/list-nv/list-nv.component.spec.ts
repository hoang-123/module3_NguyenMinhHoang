import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNVComponent } from './list-nv.component';

describe('ListNVComponent', () => {
  let component: ListNVComponent;
  let fixture: ComponentFixture<ListNVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
