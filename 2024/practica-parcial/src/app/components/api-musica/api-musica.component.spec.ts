import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiMusicaComponent } from './api-musica.component';

describe('ApiMusicaComponent', () => {
  let component: ApiMusicaComponent;
  let fixture: ComponentFixture<ApiMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiMusicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
