import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaggiComponent } from './viaggi.component';

describe('ViaggiComponent', () => {
  let component: ViaggiComponent;
  let fixture: ComponentFixture<ViaggiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViaggiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViaggiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
