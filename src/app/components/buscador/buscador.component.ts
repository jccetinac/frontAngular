import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { tap } from 'rxjs/operators';
import { HeroeModel } from 'src/app/models/Heroe.model';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})

export class BuscadorComponent implements OnInit {

  termino: string;
  heroes: HeroeModel[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(params => this.termino = params.termino),
      tap(() => this.heroes = this.heroesService.searchHeroe(this.termino))
    ).subscribe();
    ;

  }

  verHeroe(id: string) {
    this.router.navigate(['/heroe', id]);
  }

}
