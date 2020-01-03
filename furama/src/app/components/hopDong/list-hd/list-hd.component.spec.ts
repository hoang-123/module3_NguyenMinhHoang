import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHDComponent } from './list-hd.component';

describe('ListHDComponent', () => {
  let component: ListHDComponent;
  let fixture: ComponentFixture<ListHDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
