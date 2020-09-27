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
      flight_number: 11,
      mission_name: "CASSIOPE",
      mission_id: [ ],
      launch_year: "2013",
      launch_date_unix: 1380470400,
      launch_date_utc: "2013-09-29T16:00:00.000Z",
      launch_date_local: "2013-09-29T09:00:00-07:00",
      is_tentative: false,
      tentative_max_precision: "hour",
      tbd: false,
      launch_window: 0,
      rocket: {
      rocket_id: "falcon9",
      rocket_name: "Falcon 9",
      rocket_type: "v1.1",
      first_stage: {
      cores: [
      {
      core_serial: "B1003",
      flight: 1,
      block: 1,
      gridfins: false,
      legs: false,
      reused: false,
      land_success: false,
      landing_intent: true,
      landing_type: "Ocean",
      landing_vehicle: null
      }
      ]
      },
      second_stage: {
      block: 1,
      payloads: [
      {
      payload_id: "CASSIOPE",
      norad_id: [
      39265
      ],
      reused: false,
      customers: [
      "MDA"
      ],
      nationality: "Canada",
      manufacturer: "MDA",
      payload_type: "Satellite",
      payload_mass_kg: 500,
      payload_mass_lbs: 1100,
      orbit: "PO",
      orbit_params: {
      reference_system: "geocentric",
      regime: "low-earth",
      longitude: null,
      semi_major_axis_km: 7170.063,
      eccentricity: 0.0658947,
      periapsis_km: 319.459,
      apoapsis_km: 1264.397,
      inclination_deg: 80.9684,
      period_min: 100.703,
      lifespan_years: 2,
      epoch: "2020-09-26T19:09:48.000Z",
      mean_motion: 14.29941431,
      raan: 208.4457,
      arg_of_pericenter: 6.6571,
      mean_anomaly: 354.2838
      }
      }
      ]
      },
      fairings: {
      reused: false,
      recovery_attempt: false,
      recovered: false,
      ship: null
      }
      },
      ships: [
      "AMERICANSPIRIT"
      ],
      telemetry: {
      flight_club: null
      },
      launch_site: {
      site_id: "vafb_slc_4e",
      site_name: "VAFB SLC 4E",
      site_name_long: "Vandenberg Air Force Base Space Launch Complex 4E"
      },
      launch_success: true,
      links: {
      mission_patch: "https://images2.imgbox.com/89/bc/JcbcvuBI_o.png",
      mission_patch_small: "https://images2.imgbox.com/91/27/VhC1TTYN_o.png",
      reddit_campaign: null,
      reddit_launch: "http://www.reddit.com/r/spacex/comments/1ndlay",
      reddit_recovery: null,
      reddit_media: null,
      presskit: "https://spaceflightnow.com/falcon9/006/UpgradedF9DemoMission_PressKit.pdf",
      article_link: "http://www.parabolicarc.com/2013/09/29/falcon-9-launch-payloads-orbit-vandenberg/",
      wikipedia: "https://en.wikipedia.org/wiki/CASSIOPE",
      video_link: "https://www.youtube.com/watch?v=uFefasS6bhc",
      youtube_id: "uFefasS6bhc",
      flickr_images: [ ]
      },
      upcoming: false,
      static_fire_date_utc: "2013-09-19T00:00:00.000Z",
      static_fire_date_unix: 1379548800,
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
