import { Component, OnInit } from '@angular/core';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  heroes: SuperHero[] = [];
  heroToEdit?: SuperHero;

  constructor(private srv: SuperHeroService) {}

  ngOnInit(): void {
    this.srv
      .getSuperHeroes()
      .subscribe((res: SuperHero[]) => (this.heroes = res));
  }

  updateHeroList(heroes: SuperHero[]) {
    this.heroes = heroes;
  }

  initNewHero() {
    this.heroToEdit = new SuperHero();
  }

  editHero(hero: SuperHero) {
    this.heroToEdit = hero;
  }
}
