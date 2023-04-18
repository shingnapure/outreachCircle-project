import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupLoadingComponent } from './group-loading.component';

describe('GroupLoadingComponent', () => {
  let component: GroupLoadingComponent;
  let fixture: ComponentFixture<GroupLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
