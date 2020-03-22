import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalBookComponent } from './detal-book.component';

describe('DetalBookComponent', () => {
  let component: DetalBookComponent;
  let fixture: ComponentFixture<DetalBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
