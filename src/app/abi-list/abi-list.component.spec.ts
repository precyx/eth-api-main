import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbiListComponent } from './abi-list.component';

describe('AbiListComponent', () => {
  let component: AbiListComponent;
  let fixture: ComponentFixture<AbiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
