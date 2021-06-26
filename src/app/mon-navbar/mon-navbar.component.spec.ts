import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonNavbarComponent } from './mon-navbar.component';

describe('MonNavbarComponent', () => {
  let component: MonNavbarComponent;
  let fixture: ComponentFixture<MonNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
