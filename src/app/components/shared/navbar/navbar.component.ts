import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  terminoBuscado: string = "a";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  buscarHeroe(texto: string){
    this.router.navigate(['/buscar', texto]);
  }

}
