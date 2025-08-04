import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="classes" class="classes">
      <div class="container">
        <div class="section-header">
          <h2>NOSSAS <span>MODALIDADES</span></h2>
          <p>Escolha o treino ideal para seus objetivos e nível de experiência</p>
        </div>
        
        <div class="classes-grid">
          <div class="class-card" *ngFor="let class of classes">
            <div class="card-image">
              <img [src]="class.image" [alt]="class.name">
              <div class="card-overlay">
                <span class="difficulty">{{class.difficulty}}</span>
              </div>
            </div>
            <div class="card-content">
              <h3>{{class.name}}</h3>
              <p>{{class.description}}</p>
              <div class="class-info">
                <span class="duration">⏱️ {{class.duration}}</span>
                <span class="intensity">🔥 {{class.intensity}}</span>
              </div>
              <button class="class-btn">Experimentar Grátis</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .classes {
      padding: 6rem 0;
      background: #1f2937;
      color: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-header h2 {
      font-size: 2.5rem;
      font-weight: 900;
      margin-bottom: 1rem;
      color: white;
    }

    .section-header span {
      color: #dc2626;
    }

    .section-header p {
      font-size: 1.2rem;
      color: #9ca3af;
      max-width: 600px;
      margin: 0 auto;
    }

    .classes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .class-card {
      background: #374151;
      border-radius: 16px;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border: 1px solid rgba(220, 38, 38, 0.2);
    }

    .class-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(220, 38, 38, 0.2);
    }

    .card-image {
      position: relative;
      height: 200px;
      overflow: hidden;
    }

    .card-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .class-card:hover .card-image img {
      transform: scale(1.1);
    }

    .card-overlay {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }

    .difficulty {
      background: rgba(220, 38, 38, 0.9);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 600;
    }

    .card-content {
      padding: 2rem;
    }

    .card-content h3 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: white;
    }

    .card-content p {
      color: #d1d5db;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .class-info {
      display: flex;
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .class-info span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #9ca3af;
      font-size: 0.9rem;
    }

    .class-btn {
      width: 100%;
      background: linear-gradient(45deg, #dc2626, #b91c1c);
      color: white;
      border: none;
      padding: 1rem;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .class-btn:hover {
      background: linear-gradient(45deg, #b91c1c, #dc2626);
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      .classes {
        padding: 4rem 0;
      }

      .classes-grid {
        grid-template-columns: 1fr;
      }

      .class-card {
        max-width: 400px;
        margin: 0 auto;
      }
    }
  `]
})
export class ClassesComponent {
  classes = [
    {
      name: 'Boxe Tradicional',
      description: 'Aprenda os fundamentos do boxe clássico com técnicas tradicionais e disciplina militar.',
      image: 'https://images.pexels.com/photos/4761786/pexels-photo-4761786.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      difficulty: 'Iniciante',
      duration: '60 min',
      intensity: 'Moderada'
    },
    {
      name: 'Boxe Fitness',
      description: 'Combine cardio intenso com técnicas de boxe para queimar calorias e tonificar o corpo.',
      image: 'https://images.pexels.com/photos/4761792/pexels-photo-4761792.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      difficulty: 'Todos os níveis',
      duration: '45 min',
      intensity: 'Alta'
    },
    {
      name: 'Muay Thai',
      description: 'Arte marcial tailandesa que utiliza punhos, cotovelos, joelhos e canelas.',
      image: 'https://images.pexels.com/photos/4761667/pexels-photo-4761667.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      difficulty: 'Intermediário',
      duration: '60 min',
      intensity: 'Alta'
    },
    {
      name: 'Boxe Kids',
      description: 'Programa especial para crianças desenvolverem coordenação, disciplina e autoconfiança.',
      image: 'https://images.pexels.com/photos/4761665/pexels-photo-4761665.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      difficulty: '6-12 anos',
      duration: '45 min',
      intensity: 'Leve'
    },
    {
      name: 'Boxe Competitivo',
      description: 'Treinamento avançado para atletas que desejam competir em torneios oficiais.',
      image: 'https://images.pexels.com/photos/4761671/pexels-photo-4761671.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      difficulty: 'Avançado',
      duration: '90 min',
      intensity: 'Extrema'
    },
    {
      name: 'Cross Training',
      description: 'Combine boxe com exercícios funcionais para um treino completo e desafiador.',
      image: 'https://images.pexels.com/photos/4761670/pexels-photo-4761670.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      difficulty: 'Intermediário',
      duration: '50 min',
      intensity: 'Alta'
    }
  ];
}