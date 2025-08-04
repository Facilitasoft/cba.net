import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <nav class="nav">
        <div class="nav-brand">
          <img src="assets/cba.png" alt="CBA Logo" class="logo" />
          <h1 class="brand-title">CBA</h1>
        </div>
        <ul class="nav-menu" [class.active]="isMenuOpen">
          <li><a href="#" (click)="closeMenu()">Inicio</a></li>
          <!-- <li><button class="championship-btn" (click)="goToChampionship()">Campeonato</button></li> -->
        </ul>
        <button class="nav-toggle" (click)="toggleMenu()" [class.active]="isMenuOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(0, 0, 0, 0.95);
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
    }

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .nav-brand {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .nav-brand .logo {
      height: 50px;
      width: auto;
      transition: transform 0.3s ease;
    }

    .nav-brand .logo:hover {
      transform: scale(1.05);
    }

    .nav-brand .brand-title {
      font-size: 1.8rem;
      font-weight: 800;
      color: white;
      letter-spacing: 2px;
      margin: 0;
    }

    .nav-brand span {
      color: #dc2626;
    }

    .nav-menu {
      display: flex;
      list-style: none;
      gap: 2rem;
      margin: 0;
      padding: 0;
    }

    .nav-menu a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
      position: relative;
    }

    .nav-menu a:hover {
      color: #dc2626;
    }

    .nav-menu a::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: #dc2626;
      transition: width 0.3s ease;
    }

    .nav-menu a:hover::after {
      width: 100%;
    }

    .nav-toggle {
      display: none;
      flex-direction: column;
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
    }

    .nav-toggle span {
      width: 24px;
      height: 3px;
      background: white;
      margin: 2px 0;
      transition: 0.3s;
    }

    .nav-toggle.active span:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 6px);
    }

    .nav-toggle.active span:nth-child(2) {
      opacity: 0;
    }

    .nav-toggle.active span:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
    }


      .championship-btn {
        background: linear-gradient(45deg, #dc2626, #fbbf24);
        color: white;
        border: none;
        padding: 0.5rem 1.5rem;
        border-radius: 25px;
        font-weight: 600;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 1px;
        box-shadow: 0 2px 10px rgba(220, 38, 38, 0.3);
      }

      .championship-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(220, 38, 38, 0.4);
        background: linear-gradient(45deg, #fbbf24, #dc2626);
      }
    @media (max-width: 768px) {
      .nav-toggle {
        display: flex;
      }

      .nav-menu {
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.98);
        flex-direction: column;
        padding: 2rem;
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      }

      .nav-menu.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }

      .nav-menu li {
        margin: 1rem 0;
      }
    }
  `]
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