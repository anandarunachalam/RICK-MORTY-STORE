import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HfPaginationBlockComponent } from './hf-pagination-block.component';

describe('HfPaginationBlockComponent', () => {
  let component: HfPaginationBlockComponent;
  let fixture: ComponentFixture<HfPaginationBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HfPaginationBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HfPaginationBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
