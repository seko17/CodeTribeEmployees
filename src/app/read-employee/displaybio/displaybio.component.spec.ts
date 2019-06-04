import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaybioComponent } from './displaybio.component';

describe('DisplaybioComponent', () => {
  let component: DisplaybioComponent;
  let fixture: ComponentFixture<DisplaybioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaybioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaybioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
