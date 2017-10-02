import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Response } from '@angular/http';


import { Hero } from './model-hero';
import { HeroService } from './hero.service';
import { HttpService } from './http.service';



@Component({
  selector: 'hero-detail-json',
  templateUrl: './hero-detail-json.component.html',
  styleUrls: ['./hero-detail-json.component.css'],
  providers: [ HttpService]
})
export class HeroDetailComponentJson implements OnInit {
  heroes: Hero[]=[];
  selectedHero: Hero;
  hero: Hero = new Hero();

  constructor(private httpService: HttpService,
              private location: Location)  {}

  receivedHero: Hero;
  done: boolean = false;
  ngOnInit(){
    this.httpService.getData()
      .subscribe((data: Response) => this.heroes = data.json().heroes);

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.httpService.id = this.selectedHero.id;
    this.counter();
  }

  goBack(): void {
  this.location.back();
  }

  counter(): number {
    let i = this.heroes.length+1;
    console.log(i)
    return i;

  }

  submit(hero){
    this.httpService.postData(hero)
      .subscribe((data) => {this.receivedHero=data; this.done=true;});
  }
  edit(hero){
    this.httpService.putData(hero)
      .subscribe((data) => {this.receivedHero=data; this.done=true;});
  }

  delete(hero){
   this.httpService.delData(hero)
      .subscribe();
  }

}
