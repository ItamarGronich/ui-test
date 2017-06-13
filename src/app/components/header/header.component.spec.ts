import { TestBed, async } from '@angular/core/testing';

import { Header } from './header.component';

describe('Header', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Header
      ],
    }).compileComponents();
  }));

  it('should create a header item', async(() => {
    const fixture = TestBed.createComponent(Header);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
