import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrimonalComponent } from './matrimonal.component';

describe('MatrimonalComponent', () => {
  let component: MatrimonalComponent;
  let fixture: ComponentFixture<MatrimonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrimonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrimonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
