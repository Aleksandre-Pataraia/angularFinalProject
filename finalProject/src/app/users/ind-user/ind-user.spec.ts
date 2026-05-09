import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndUser } from './ind-user';

describe('IndUser', () => {
  let component: IndUser;
  let fixture: ComponentFixture<IndUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndUser],
    }).compileComponents();

    fixture = TestBed.createComponent(IndUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
