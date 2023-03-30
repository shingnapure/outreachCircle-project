import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutreachcircleListItemComponent } from './outreachcircle-list-item.component';

describe('OutreachcircleListItemComponent', () => {
  let component: OutreachcircleListItemComponent;
  let fixture: ComponentFixture<OutreachcircleListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutreachcircleListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutreachcircleListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
