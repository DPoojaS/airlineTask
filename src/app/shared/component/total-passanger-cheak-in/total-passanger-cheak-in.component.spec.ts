import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPassangerCheakInComponent } from './total-passanger-cheak-in.component';

describe('TotalPassangerCheakInComponent', () => {
  let component: TotalPassangerCheakInComponent;
  let fixture: ComponentFixture<TotalPassangerCheakInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalPassangerCheakInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalPassangerCheakInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
