import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernPerformanceDetailsComponent } from './modern-performance-details.component';

describe('ModernPerformanceDetailsComponent', () => {
  let component: ModernPerformanceDetailsComponent;
  let fixture: ComponentFixture<ModernPerformanceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModernPerformanceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernPerformanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
