import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirLinePassDashbordComponent } from './air-line-pass-dashbord.component';

describe('AirLinePassDashbordComponent', () => {
  let component: AirLinePassDashbordComponent;
  let fixture: ComponentFixture<AirLinePassDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirLinePassDashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirLinePassDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
