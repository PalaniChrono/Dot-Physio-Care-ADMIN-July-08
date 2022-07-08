import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebannerImageComponent } from './homebanner-image.component';

describe('HomebannerImageComponent', () => {
  let component: HomebannerImageComponent;
  let fixture: ComponentFixture<HomebannerImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomebannerImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomebannerImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
