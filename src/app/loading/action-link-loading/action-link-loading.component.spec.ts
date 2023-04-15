import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionLinkLoadingComponent } from './action-link-loading.component';

describe('ActionLinkLoadingComponent', () => {
  let component: ActionLinkLoadingComponent;
  let fixture: ComponentFixture<ActionLinkLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionLinkLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionLinkLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
