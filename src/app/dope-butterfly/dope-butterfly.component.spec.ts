import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DopeButterflyComponent } from './dope-butterfly.component';

describe('DopeButterflyComponent', () => {
  let component: DopeButterflyComponent;
  let fixture: ComponentFixture<DopeButterflyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DopeButterflyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DopeButterflyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
