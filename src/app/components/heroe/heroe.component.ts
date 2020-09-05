import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { tap } from 'rxjs/operators';
import { HeroeModel } from 'src/app/models/Heroe.model';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {
  id: number;
  heroe: HeroeModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(params => this.getHeroe(params.id))
    ).subscribe();
  }

  getHeroe(i: string) {
    this.heroesService.getHeroe$(i).pipe(
      tap((heroe: HeroeModel) => this.heroe = heroe),
    ).subscribe();
  }

  deleteHeroe(id: string) {
    this.heroesService.deleteHeroe(id).pipe(
      tap(() => this.router.navigate(['/heroes']))
    ).subscribe();
  }
}
