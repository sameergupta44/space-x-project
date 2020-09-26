import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() year: any;
  // @Output() yearevent = new EventEmitter();
  @Output() configObj = new EventEmitter();

  config: any = {
    launch: null,
    landing: null,
    year: ''
  };

  constructor() { }

  ngOnInit() {
  }

  selectYear(year) {
    if (this.config.year === '' + year) {
      this.config.year = '';
    } else {
      this.config.year = year;
    }
    console.log(this.config);
    this.configObj.emit(this.config);
  }

  selectLaunch(val) {
    if (this.config.launch === val) {
      this.config.launch = null;
    } else {
      this.config.launch = val;
    }
    console.log(this.config);
    this.configObj.emit(this.config);
  }

  selectLanding(val) {
    if (this.config.landing === val) {
      this.config.landing = null;
    } else {
      this.config.landing = val;
    }
    console.log(this.config);
    this.configObj.emit(this.config);
  }


}
