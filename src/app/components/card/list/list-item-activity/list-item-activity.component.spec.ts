import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemActivityComponent } from './list-item-activity.component';

describe('ListItemActivityComponent', () => {
  let component: ListItemActivityComponent;
  let fixture: ComponentFixture<ListItemActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
