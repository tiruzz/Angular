import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCommandComponent } from './second-command.component';

describe('SecondCommandComponent', () => {
  let component: SecondCommandComponent;
  let fixture: ComponentFixture<SecondCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondCommandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
