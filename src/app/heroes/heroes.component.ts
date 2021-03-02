import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  private heroService: HeroService | undefined;
  private messageService: MessageService | undefined;
  selectedHero?: Hero;
  heroes: Hero[] | undefined = [];

  constructor(heroService: HeroService,   messageService: MessageService) {
    this.heroService = heroService;
    this.messageService = messageService;
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService?.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService?.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
