import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutreachcircleListComponent } from './outreachcircle-list.component';

describe('OutreachcircleListComponent', () => {
  let component: OutreachcircleListComponent;
  let fixture: ComponentFixture<OutreachcircleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutreachcircleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutreachcircleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
