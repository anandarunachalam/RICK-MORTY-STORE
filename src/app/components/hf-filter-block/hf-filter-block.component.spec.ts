import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HfFilterBlockComponent } from './hf-filter-block.component';

describe('HfFilterBlockComponent', () => {
  let component: HfFilterBlockComponent;
  let fixture: ComponentFixture<HfFilterBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HfFilterBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HfFilterBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
