import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiClimaComponent } from './api-clima.component';

describe('ApiClimaComponent', () => {
  let component: ApiClimaComponent;
  let fixture: ComponentFixture<ApiClimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiClimaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
