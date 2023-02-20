import { HeroService } from './../services/hero.service';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import { MessageService } from "./../services/message.service";
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit{
  heroes: Hero[] = [];
  // selectedHero: Hero = {};

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  getHeroes() : void {
    this.heroService.getHeroes().subscribe(h => this.heroes = h);
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.addMessages(this.selectedHero.name + " selected on " + new Date().toLocaleString("se-SE"));

  // }

  ngOnInit(): void {
    this.getHeroes();
  }

}
