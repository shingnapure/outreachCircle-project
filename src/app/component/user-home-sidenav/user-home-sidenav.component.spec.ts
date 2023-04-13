import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeSidenavComponent } from './user-home-sidenav.component';

describe('UserHomeSidenavComponent', () => {
  let component: UserHomeSidenavComponent;
  let fixture: ComponentFixture<UserHomeSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHomeSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomeSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
