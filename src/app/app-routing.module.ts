import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddHeroComponent } from './components/add-hero/add-hero.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


const routes: Routes = [
{path: 'add-hero', component: AddHeroComponent},
{path: 'about', component: AboutComponent},
{path: 'heroes', component: HeroesComponent},
{path: 'heroe/:id', component: HeroeComponent},
{path: 'buscar/:termino', component: BuscadorComponent},

{path: '**', pathMatch:'full' , redirectTo: 'heroes'},

];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
