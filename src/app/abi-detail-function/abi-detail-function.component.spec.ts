import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbiDetailFunctionComponent } from './abi-detail-function.component';

describe('AbiDetailFunctionComponent', () => {
  let component: AbiDetailFunctionComponent;
  let fixture: ComponentFixture<AbiDetailFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbiDetailFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbiDetailFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
