import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHDComponent } from './create-hd.component';

describe('CreateHDComponent', () => {
  let component: CreateHDComponent;
  let fixture: ComponentFixture<CreateHDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
