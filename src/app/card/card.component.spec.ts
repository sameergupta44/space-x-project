import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { By } from '@angular/platform-browser';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.item = {
          flight_number: 1,
          mission_name: 'FalconSat',
          mission_id: [ 21, 22 ],
          upcoming: false,
          launch_year: '2006',
          launch_date_unix: 1143239400,
          launch_date_utc: '2006-03-24T22:30:00.000Z',
          launch_date_local: '2006-03-25T10:30:00+12:00',
          is_tentative: false,
          tentative_max_precision: 'hour',
          tbd: false,
          launch_window: 0,
          telemetry: {
          flight_club: null
          },
          launch_success: false,
          launch_failure_details: {
          time: 33,
          altitude: null,
          reason: 'merlin engine failure'
          },
          links: {
          mission_patch: 'https://images2.imgbox.com/40/e3/GypSkayF_o.png',
          mission_patch_small: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
          reddit_campaign: null,
          reddit_launch: null,
          reddit_recovery: null,
          reddit_media: null,
          presskit: null,
          article_link: 'https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html',
          wikipedia: 'https://en.wikipedia.org/wiki/DemoSat',
          video_link: 'https://www.youtube.com/watch?v=0a_00nJ_Y88',
          youtube_id: '0a_00nJ_Y88',
          flickr_images: [ ]
          },
          details: 'Engine failure at 33 seconds and loss of vehicle',
          static_fire_date_utc: '2006-03-17T00:00:00.000Z',
          static_fire_date_unix: 1142553600,
          timeline: {
          webcast_liftoff: 54
          },
          crew: null
      };
    fixture.detectChanges();
  });

  it('should create card component', () => {
    expect(component).toBeTruthy();
  });

  it('should show image tag in card', () => {
    expect(fixture.debugElement.query(By.css('.img-container img'))).toBeTruthy();
  });

  it('should render correct card texts for "mission-id" ', () => {
    const selector = '.card-container .mission-id b';
    expect(fixture.debugElement.nativeElement.querySelector(selector).textContent).toContain('Mission Ids:');
  });

  it('should render correct card texts for "launch-year" ', () => {
    const selector = '.card-container .launch-year b';
    expect(fixture.debugElement.nativeElement.querySelector(selector).textContent).toContain('Launch Year:');
  });

  it('should render correct card texts for "success-launch" ', () => {
    const selector = '.card-container .success-launch b';
    expect(fixture.debugElement.nativeElement.querySelector(selector).textContent).toContain('Successful Launch:');
  });

  it('should render correct card texts for "success-landing" ', () => {
    const selector = '.card-container .success-land b';
    expect(fixture.debugElement.nativeElement.querySelector(selector).textContent).toContain('Successful Landing:');
  });



});
