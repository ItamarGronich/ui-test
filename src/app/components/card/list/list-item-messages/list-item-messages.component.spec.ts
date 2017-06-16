import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemMessagesComponent } from './list-item-messages.component';

describe('ListItemMessagesComponent', () => {
  let component: ListItemMessagesComponent;
  let fixture: ComponentFixture<ListItemMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
