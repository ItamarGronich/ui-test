import { TestBed, async } from '@angular/core/testing';

import { SideMenu } from './sideMenu.component';

describe('SideMenu', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SideMenu
      ],
    }).compileComponents();
  }));

  it('should create a side menu item', async(() => {
    const fixture = TestBed.createComponent(SideMenu);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
