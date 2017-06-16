import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemTasksComponent } from './list-item-tasks.component';

describe('ListItemTasksComponent', () => {
  let component: ListItemTasksComponent;
  let fixture: ComponentFixture<ListItemTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
