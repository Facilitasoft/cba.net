import { Component } from '@angular/core';
import { HeroComponent } from './hero.component';
import { AboutComponent } from './about.component';
import { ClassesComponent } from './classes.component';
import { TrainersComponent } from './trainers.component';
import { PricingComponent } from './pricing.component';
import { ContactComponent } from './contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    ClassesComponent,
    TrainersComponent,
    PricingComponent,
    ContactComponent
  ],
  template: `
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-classes></app-classes>
      <app-trainers></app-trainers>
      <app-pricing></app-pricing>
      <app-contact></app-contact>
    </main>
  `,
  styles: [`
    main {
      overflow-x: hidden;
    }
  `]
})
export class HomeComponent {}