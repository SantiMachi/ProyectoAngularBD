import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-indexx',
  templateUrl: './indexx.component.html',
})
export class IndexxComponent implements OnInit {

  heroes: Heroe[] = [];
  
  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {

    this.heroesService.getHeroes()
      .subscribe( heroes => this.heroes = heroes );

  }

}