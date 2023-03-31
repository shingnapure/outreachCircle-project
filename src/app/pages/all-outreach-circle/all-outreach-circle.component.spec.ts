import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOutreachCircleComponent } from './all-outreach-circle.component';

describe('AllOutreachCircleComponent', () => {
  let component: AllOutreachCircleComponent;
  let fixture: ComponentFixture<AllOutreachCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllOutreachCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOutreachCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
