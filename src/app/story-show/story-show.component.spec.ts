import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryShowComponent } from './story-show.component';

describe('StoryShowComponent', () => {
  let component: StoryShowComponent;
  let fixture: ComponentFixture<StoryShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
