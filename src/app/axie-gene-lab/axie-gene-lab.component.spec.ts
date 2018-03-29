import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxieGeneLabComponent } from './axie-gene-lab.component';

describe('AxieGeneLabComponent', () => {
  let component: AxieGeneLabComponent;
  let fixture: ComponentFixture<AxieGeneLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxieGeneLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxieGeneLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
