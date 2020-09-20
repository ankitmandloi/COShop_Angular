import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceordersComponent } from './placeorders.component';

describe('PlaceordersComponent', () => {
  let component: PlaceordersComponent;
  let fixture: ComponentFixture<PlaceordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
