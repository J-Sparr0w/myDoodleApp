import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackCanvasComponent } from './feedback-canvas.component';

describe('FeedbackCanvasComponent', () => {
  let component: FeedbackCanvasComponent;
  let fixture: ComponentFixture<FeedbackCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackCanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
