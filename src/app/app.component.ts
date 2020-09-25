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
    // this.year = [2006, 2008, 2010, 2012, 2014, 2016, 2018];
    console.log(this.year);
  }


}
