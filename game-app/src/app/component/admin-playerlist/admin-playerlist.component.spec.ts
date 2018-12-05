import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlayerlistComponent } from './admin-playerlist.component';

describe('AdminPlayerlistComponent', () => {
  let component: AdminPlayerlistComponent;
  let fixture: ComponentFixture<AdminPlayerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPlayerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPlayerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
