import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/Heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from 'src/app/services/heroes.service';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent implements OnInit {

  heroe : HeroeModel = new HeroeModel;

  constructor(
    private heroesService: HeroesService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  guardar(form: NgForm){

    if (form.invalid){
      return null;
    }

    this.heroesService.createHeroe(this.heroe).pipe(
      tap(()=> this.router.navigate(['/heroes']) )
    ).subscribe();

  }


}
