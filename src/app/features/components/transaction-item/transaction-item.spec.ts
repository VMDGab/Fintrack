import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionItem } from './transaction-item';

describe('TransactionItem', () => {
  let component: TransactionItem;
  let fixture: ComponentFixture<TransactionItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
