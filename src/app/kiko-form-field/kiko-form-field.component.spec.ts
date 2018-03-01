import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KikoFormFieldComponent } from './kiko-form-field.component';

describe('KikoFormFieldComponent', () => {
  let component: KikoFormFieldComponent;
  let fixture: ComponentFixture<KikoFormFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KikoFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KikoFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
