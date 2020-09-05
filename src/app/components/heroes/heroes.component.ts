import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';
import { HeroeModel } from 'src/app/models/Heroe.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit {

  heroes: HeroeModel[] = [];
  constructor(
    private heroesService: HeroesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.heroesService.getHeroes$().pipe(
      tap(heroesList => this.heroes = heroesList)
    ).subscribe();
  }

  verHeroe(id: number) {
    this.router.navigate(['/heroe', id]);
  }

}
