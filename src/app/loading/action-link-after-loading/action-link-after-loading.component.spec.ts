import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionLinkAfterLoadingComponent } from './action-link-after-loading.component';

describe('ActionLinkAfterLoadingComponent', () => {
  let component: ActionLinkAfterLoadingComponent;
  let fixture: ComponentFixture<ActionLinkAfterLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionLinkAfterLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionLinkAfterLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
