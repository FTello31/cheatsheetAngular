import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowButtonsComponent } from './table-row-buttons.component';

describe('TableRowButtonsComponent', () => {
  let component: TableRowButtonsComponent;
  let fixture: ComponentFixture<TableRowButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRowButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRowButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
