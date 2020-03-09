import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HfCardListComponent } from './hf-card-list.component';

describe('HfCardListComponent', () => {
  let component: HfCardListComponent;
  let fixture: ComponentFixture<HfCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HfCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HfCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
