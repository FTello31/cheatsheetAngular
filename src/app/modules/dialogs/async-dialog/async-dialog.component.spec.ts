import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncDialogComponent } from './async-dialog.component';

describe('AsyncDialogComponent', () => {
  let component: AsyncDialogComponent;
  let fixture: ComponentFixture<AsyncDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
