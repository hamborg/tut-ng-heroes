import { Component, OnInit, enableProdMode } from '@angular/core';
import { Hero } from "../hero"
import { HEROES } from "../mock-heroes"

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes = HEROES
  selectedHero: Hero;           // 'Hero' er den class vi har defineret og hentet ind ovenfor.
  
  constructor() { }
  
  ngOnInit() {
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
