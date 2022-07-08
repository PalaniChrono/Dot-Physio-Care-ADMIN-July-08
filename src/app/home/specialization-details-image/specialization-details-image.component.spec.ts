import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationDetailsImageComponent } from './specialization-details-image.component';

describe('SpecializationDetailsImageComponent', () => {
  let component: SpecializationDetailsImageComponent;
  let fixture: ComponentFixture<SpecializationDetailsImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecializationDetailsImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializationDetailsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
