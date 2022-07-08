import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationImageComponent } from './organization-image.component';

describe('OrganizationImageComponent', () => {
  let component: OrganizationImageComponent;
  let fixture: ComponentFixture<OrganizationImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
