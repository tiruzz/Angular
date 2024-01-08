import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthCommandComponent } from './fourth-command.component';

describe('FourthCommandComponent', () => {
  let component: FourthCommandComponent;
  let fixture: ComponentFixture<FourthCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourthCommandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FourthCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
