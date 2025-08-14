import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="bg-dark bg-opacity-95 w-100">
      <nav class="container d-flex flex-wrap align-items-center justify-content-between py-3">
        <div class="d-flex align-items-center gap-2">
          <img src="assets/cba.png" alt="CBA Logo" class="me-2" style="height: 48px; width: auto;" />
          <h1 class="mb-0 fs-3 fw-bold text-white">CBA</h1>
        </div>
        <ul class="nav nav-pills gap-3 mb-0">
          <!-- <li class="nav-item"><a href="#" class="nav-link text-white fw-semibold px-3" (click)="closeMenu()">Inicio</a></li> -->
          <!-- <li class="nav-item"><button class="btn btn-warning text-white px-3 rounded-pill fw-semibold" (click)="goToChampionship()">Campeonato</button></li> -->
        </ul>
      </nav>
    </header>
  `,
  styles: []
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(private router: Router) { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  goToChampionship() {
    this.closeMenu();
    this.router.navigate(['/campeonato']);
  }
}