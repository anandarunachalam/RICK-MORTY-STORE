import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HfChipsListComponent } from './hf-chips-list.component';

describe('HfChipsListComponent', () => {
  let component: HfChipsListComponent;
  let fixture: ComponentFixture<HfChipsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HfChipsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HfChipsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
