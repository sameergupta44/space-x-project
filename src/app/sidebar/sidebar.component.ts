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
    launch: false,
    landing: false,
    year: ''
  };

  constructor() { }

  ngOnInit() {
  }

  selectYear(year) {
    this.config.year = year;
    console.log(this.config);
    this.configObj.emit(this.config);
  }

  selectLaunch(val) {
    this.config.launch = val;
    console.log(this.config);
    this.configObj.emit(this.config);
  }

  selectLanding(val) {
    this.config.landing = val;
    console.log(this.config);
    this.configObj.emit(this.config);
  }


}
