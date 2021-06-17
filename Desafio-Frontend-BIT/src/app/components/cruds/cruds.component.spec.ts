import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudsComponent } from './cruds.component';

describe('CrudsComponent', () => {
  let component: CrudsComponent;
  let fixture: ComponentFixture<CrudsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
