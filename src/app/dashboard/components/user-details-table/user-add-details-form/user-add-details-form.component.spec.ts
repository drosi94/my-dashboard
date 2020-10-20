import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddDetailsFormComponent } from './user-add-details-form.component';

describe('UserAddDetailsFormComponent', () => {
  let component: UserAddDetailsFormComponent;
  let fixture: ComponentFixture<UserAddDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
