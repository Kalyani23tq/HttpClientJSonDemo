import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalservComponent } from './localserv.component';

describe('LocalservComponent', () => {
  let component: LocalservComponent;
  let fixture: ComponentFixture<LocalservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalservComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
