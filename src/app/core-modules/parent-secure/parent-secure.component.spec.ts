import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentSecureComponent } from './parent-secure.component';

describe('ParentSecureComponent', () => {
  let component: ParentSecureComponent;
  let fixture: ComponentFixture<ParentSecureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentSecureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentSecureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
