import { Component, OnInit, getModuleFactory } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url = 'https://spreadsheets.google.com/feeds/list/1EsbkU7ZPz8BaLWkQhDm1EB7eomj-nwahB7DGlr8j_Tc/od6/public/values?alt=json';
  test;
  constructor(  private http:HttpClient  ){  
    this.http.get(this.url).toPromise().then(data => {      
      console.log(data['feed']['entry']);
      this.test = data['feed']['entry'][0].gsx$artist.$t;
      console.log(this.test);
      
    });
  };
  ngOnInit() { }
}
