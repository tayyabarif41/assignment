import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrHistoryComponent } from './sr-history.component';

describe('SrHistoryComponent', () => {
  let component: SrHistoryComponent;
  let fixture: ComponentFixture<SrHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
