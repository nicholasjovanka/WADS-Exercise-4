import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvpageComponent } from './cvpage.component';

describe('CvpageComponent', () => {
  let component: CvpageComponent;
  let fixture: ComponentFixture<CvpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
