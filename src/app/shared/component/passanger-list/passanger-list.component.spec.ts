import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassangerListComponent } from './passanger-list.component';

describe('PassangerListComponent', () => {
  let component: PassangerListComponent;
  let fixture: ComponentFixture<PassangerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassangerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassangerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
