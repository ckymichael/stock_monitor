import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshSilderComponent } from './refresh-silder.component';

describe('RefreshSilderComponent', () => {
  let component: RefreshSilderComponent;
  let fixture: ComponentFixture<RefreshSilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshSilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshSilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
