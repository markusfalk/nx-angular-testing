import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooPage } from './foo.page';

describe('FooPage', () => {
  let component: FooPage;
  let fixture: ComponentFixture<FooPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
