import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KikoTitlebarComponent } from './kiko-titlebar.component';

describe('KikoTitlebarComponent', () => {
  let component: KikoTitlebarComponent;
  let fixture: ComponentFixture<KikoTitlebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KikoTitlebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KikoTitlebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
