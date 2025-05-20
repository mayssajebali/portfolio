import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitrackerComponent } from './unitracker.component';

describe('UnitrackerComponent', () => {
  let component: UnitrackerComponent;
  let fixture: ComponentFixture<UnitrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitrackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnitrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
