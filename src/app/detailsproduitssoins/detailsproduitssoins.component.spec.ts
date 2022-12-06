import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsproduitssoinsComponent } from './detailsproduitssoins.component';

describe('DetailsproduitssoinsComponent', () => {
  let component: DetailsproduitssoinsComponent;
  let fixture: ComponentFixture<DetailsproduitssoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsproduitssoinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsproduitssoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
