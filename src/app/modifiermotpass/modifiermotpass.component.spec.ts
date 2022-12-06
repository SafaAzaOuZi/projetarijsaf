import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiermotpassComponent } from './modifiermotpass.component';

describe('ModifiermotpassComponent', () => {
  let component: ModifiermotpassComponent;
  let fixture: ComponentFixture<ModifiermotpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiermotpassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifiermotpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
