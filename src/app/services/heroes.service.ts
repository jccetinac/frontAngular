import { Injectable } from "@angular/core";
import { HeroeModel } from '../models/Heroe.model';
import { HttpClient } from "@angular/common/http";
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  url: string = 'https://heroes-2a770.firebaseio.com';

  constructor(
    private http: HttpClient
  ) { }

  createHeroe(heroe: HeroeModel) {
    return this.http.post(`${this.url}/heroes.json`, heroe).pipe(
      map((resp: any) => {
        heroe.id = resp.name;
        return heroe;
      })
    );
  }

  getHeroe$(idHeroe: string) {
    return this.http.get(`${this.url}/heroes/${idHeroe}.json`).pipe(
      tap((heroe: HeroeModel) => heroe.id = idHeroe)
    );

  }

  getHeroes$() {
    return this.http.get(`${this.url}/heroes.json`).pipe(
      map(heroes => this.crearArreglo(heroes)),
    );
  }

  updateHeroe(heroe) {
    const heroeTemp = { ...heroe };
    delete heroeTemp.id;
    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeTemp);
  }

  deleteHeroe(idHeroe: string) {
    return this.http.delete(`${this.url}/heroes/${idHeroe}.json`).pipe();
  }

  searchHeroe(termino: string) {
    let heroesArr: HeroeModel[] = [];
    termino = termino.toLowerCase();
    this.getHeroes$().pipe(
      tap((listHeroes) => {
        listHeroes.map(heroe => {
          heroe.nombre = heroe.nombre.toLowerCase();
          if (heroe.nombre.indexOf(termino) >= 0) {
            heroesArr.push(heroe);
          }
        });
      })

    ).subscribe();
    return heroesArr;
  }

  private crearArreglo(heroesObj: object) {
    const heroes: HeroeModel[] = [];
    Object.keys(heroesObj).forEach(key => {
      const heroe: HeroeModel = heroesObj[key];
      heroe.id = key;
      heroes.push(heroe);
    });
    return heroes;
  }

}

