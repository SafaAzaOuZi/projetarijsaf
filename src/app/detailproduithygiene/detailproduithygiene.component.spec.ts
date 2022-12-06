import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailproduithygieneComponent } from './detailproduithygiene.component';

describe('DetailproduithygieneComponent', () => {
  let component: DetailproduithygieneComponent;
  let fixture: ComponentFixture<DetailproduithygieneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailproduithygieneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailproduithygieneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
