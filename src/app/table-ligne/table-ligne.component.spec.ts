import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLigneComponent } from './table-ligne.component';

describe('TableLigneComponent', () => {
  let component: TableLigneComponent;
  let fixture: ComponentFixture<TableLigneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableLigneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
