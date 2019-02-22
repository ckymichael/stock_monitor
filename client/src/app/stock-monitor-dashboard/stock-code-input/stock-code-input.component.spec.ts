import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCodeInputComponent } from './stock-code-input.component';

describe('StockCodeInputComponent', () => {
  let component: StockCodeInputComponent;
  let fixture: ComponentFixture<StockCodeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockCodeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCodeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
