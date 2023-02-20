import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from "../hero";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.addMessages('HeroService: fetched heroes')
    return heroes;
  }

  getHero(id: Number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.addMessages(`HeroService: fetched hero id=${id}`)
    return of(hero);
  }
}
