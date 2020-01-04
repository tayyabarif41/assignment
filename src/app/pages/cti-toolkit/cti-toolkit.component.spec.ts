import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtiToolkitComponent } from './cti-toolkit.component';

describe('CtiToolkitComponent', () => {
  let component: CtiToolkitComponent;
  let fixture: ComponentFixture<CtiToolkitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtiToolkitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtiToolkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
