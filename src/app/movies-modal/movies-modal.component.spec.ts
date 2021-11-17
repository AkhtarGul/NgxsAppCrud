import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesModalComponent } from './movies-modal.component';

describe('MoviesModalComponent', () => {
  let component: MoviesModalComponent;
  let fixture: ComponentFixture<MoviesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
