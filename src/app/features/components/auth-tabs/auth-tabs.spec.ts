import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthTabs } from './auth-tabs';

describe('AuthTabs', () => {
  let component: AuthTabs;
  let fixture: ComponentFixture<AuthTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthTabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
