import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdCommandComponent } from './third-command.component';

describe('ThirdCommandComponent', () => {
  let component: ThirdCommandComponent;
  let fixture: ComponentFixture<ThirdCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdCommandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
