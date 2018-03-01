import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIoListComponent } from './form-io-list.component';

describe('FormIoListComponent', () => {
  let component: FormIoListComponent;
  let fixture: ComponentFixture<FormIoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormIoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormIoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
