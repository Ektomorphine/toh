import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from './http.service';
import { Hero } from './model-hero';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent {
  heroes: Hero[]=[];

  constructor(private httpService: HttpService)  {}

  ngOnInit(){
    this.httpService.getData()
      .subscribe((data: Response) => this.heroes = data.json());
  }


}
