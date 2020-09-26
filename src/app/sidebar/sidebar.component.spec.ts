import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    component.year = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
    fixture.detectChanges();
  });

  it('should create sidebar component', () => {
    expect(component).toBeTruthy();
  });

  it('should render true and false selectors for "successfull launch" ', () => {
    const selectorLeft = '.side-bar-container .launch-wrapper .launch-left span';
    const selectorRight = '.side-bar-container .launch-wrapper .launch-right span';
    expect(fixture.debugElement.nativeElement.querySelector(selectorLeft).textContent).toContain('True');
    expect(fixture.debugElement.nativeElement.querySelector(selectorRight).textContent).toContain('False');
  });

  it('should render true and false selectors for "successfull Landing" ', () => {
    const selectorLeft = '.side-bar-container .landing-wrapper .landing-left span';
    const selectorRight = '.side-bar-container .landing-wrapper .landing-right span';
    expect(fixture.debugElement.nativeElement.querySelector(selectorLeft).textContent).toContain('True');
    expect(fixture.debugElement.nativeElement.querySelector(selectorRight).textContent).toContain('False');
  });

});
