import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'space-x-project';
  spaceXdata: any = [];
  year: any = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getInitialData().subscribe( data => {
      this.spaceXdata = data;
      console.log(this.spaceXdata);
    });
    this.year = new Array(15).fill(2006).map((_, idx) => '' + (_ + idx));
    console.log(this.year);
  }

  getYear(year) {
    console.log(year);
    this.dataService.getLaunchData(year).subscribe( data => {
      this.spaceXdata = [];
      this.spaceXdata = data;
      console.log(this.spaceXdata);
    });
  }


  getConfigObj(config) {
      console.log(config);
      this.dataService.getLaunchData(config).subscribe( data => {
        this.spaceXdata = [];
        this.spaceXdata = data;
        console.log(this.spaceXdata);
      });
  }


}
