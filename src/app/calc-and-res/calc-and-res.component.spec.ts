import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcAndResComponent } from './calc-and-res.component';

describe('CalcAndResComponent', () => {
  let component: CalcAndResComponent;
  let fixture: ComponentFixture<CalcAndResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcAndResComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcAndResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
