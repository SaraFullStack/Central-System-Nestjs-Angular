import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargePointComponent } from './charge-point.component';

describe('ChargePointComponent', () => {
  let component: ChargePointComponent;
  let fixture: ComponentFixture<ChargePointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargePointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargePointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
