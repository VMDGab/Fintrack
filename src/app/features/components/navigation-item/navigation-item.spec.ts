import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationItem } from './navigation-item';

describe('NavigationItem', () => {
  let component: NavigationItem;
  let fixture: ComponentFixture<NavigationItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
