import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenPunto5Component } from './resumen-punto5.component';

describe('ResumenPunto5Component', () => {
  let component: ResumenPunto5Component;
  let fixture: ComponentFixture<ResumenPunto5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumenPunto5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumenPunto5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
