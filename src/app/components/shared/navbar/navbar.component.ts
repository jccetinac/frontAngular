import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  terminoBuscado: string = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  buscarHeroe(texto: string) {
    this.router.navigate(['/buscar', texto]);
  }

}
