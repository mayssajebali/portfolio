import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalSparkComponent } from './mental-spark.component';

describe('MentalSparkComponent', () => {
  let component: MentalSparkComponent;
  let fixture: ComponentFixture<MentalSparkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentalSparkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MentalSparkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
