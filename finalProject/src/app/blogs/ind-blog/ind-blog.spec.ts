import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndBlog } from './ind-blog';

describe('IndBlog', () => {
  let component: IndBlog;
  let fixture: ComponentFixture<IndBlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndBlog],
    }).compileComponents();

    fixture = TestBed.createComponent(IndBlog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
