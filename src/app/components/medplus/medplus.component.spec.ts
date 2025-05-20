import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedplusComponent } from './medplus.component';

describe('MedplusComponent', () => {
  let component: MedplusComponent;
  let fixture: ComponentFixture<MedplusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedplusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
