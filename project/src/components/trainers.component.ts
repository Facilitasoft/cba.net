import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trainers',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="trainers" class="trainers">
      <div class="container">
        <div class="section-header">
          <h2>NOSSOS <span>INSTRUTORES</span></h2>
          <p>Conheça os profissionais que irão te guiar na sua jornada</p>
        </div>
        
        <div class="trainers-grid">
          <div class="trainer-card" *ngFor="let trainer of trainers">
            <div class="trainer-image">
              <img [src]="trainer.image" [alt]="trainer.name">
              <div class="social-overlay">
                <a href="#" class="social-link">📧</a>
                <a href="#" class="social-link">📱</a>
              </div>
            </div>
            <div class="trainer-info">
              <h3>{{trainer.name}}</h3>
              <p class="trainer-title">{{trainer.title}}</p>
              <p class="trainer-bio">{{trainer.bio}}</p>
              <div class="trainer-stats">
                <div class="stat">
                  <span class="stat-number">{{trainer.experience}}</span>
                  <span class="stat-label">Anos</span>
                </div>
                <div class="stat">
                  <span class="stat-number">{{trainer.students}}</span>
                  <span class="stat-label">Alunos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .trainers {
      padding: 6rem 0;
      background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
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
      color: #1f2937;
    }

    .section-header span {
      color: #dc2626;
    }

    .section-header p {
      font-size: 1.2rem;
      color: #6b7280;
      max-width: 600px;
      margin: 0 auto;
    }

    .trainers-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .trainer-card {
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .trainer-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
    }

    .trainer-image {
      position: relative;
      height: 300px;
      overflow: hidden;
    }

    .trainer-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .trainer-card:hover .trainer-image img {
      transform: scale(1.1);
    }

    .social-overlay {
      position: absolute;
      top: 1rem;
      right: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .trainer-card:hover .social-overlay {
      opacity: 1;
    }

    .social-link {
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: transform 0.3s ease;
    }

    .social-link:hover {
      transform: scale(1.1);
      background: #dc2626;
    }

    .trainer-info {
      padding: 2rem;
    }

    .trainer-info h3 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 0.5rem;
    }

    .trainer-title {
      color: #dc2626;
      font-weight: 600;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 0.9rem;
    }

    .trainer-bio {
      color: #6b7280;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .trainer-stats {
      display: flex;
      justify-content: space-around;
      padding-top: 1.5rem;
      border-top: 1px solid #e5e7eb;
    }

    .stat {
      text-align: center;
    }

    .stat-number {
      display: block;
      font-size: 1.5rem;
      font-weight: 700;
      color: #dc2626;
    }

    .stat-label {
      font-size: 0.9rem;
      color: #6b7280;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    @media (max-width: 768px) {
      .trainers {
        padding: 4rem 0;
      }

      .trainers-grid {
        grid-template-columns: 1fr;
      }

      .trainer-card {
        max-width: 350px;
        margin: 0 auto;
      }
    }
  `]
})
export class TrainersComponent {
  trainers = [
    {
      name: 'Carlos Silva',
      title: 'Instrutor Principal',
      bio: 'Ex-campeão nacional com mais de 15 anos de experiência no boxe profissional.',
      image: 'https://images.pexels.com/photos/4761792/pexels-photo-4761792.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      experience: '15+',
      students: '200+'
    },
    {
      name: 'Ana Santos',
      title: 'Especialista em Boxe Fitness',
      bio: 'Formada em Educação Física, especialista em treinos funcionais e boxe fitness.',
      image: 'https://images.pexels.com/photos/4761786/pexels-photo-4761786.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      experience: '8+',
      students: '150+'
    },
    {
      name: 'Miguel Rodriguez',
      title: 'Instrutor de Muay Thai',
      bio: 'Lutador profissional de Muay Thai com títulos nacionais e internacionais.',
      image: 'https://images.pexels.com/photos/4761667/pexels-photo-4761667.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      experience: '12+',
      students: '100+'
    },
    {
      name: 'Fernanda Costa',
      title: 'Instrutora Kids',
      bio: 'Pedagoga especializada em desenvolvimento infantil através do esporte.',
      image: 'https://images.pexels.com/photos/4761665/pexels-photo-4761665.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      experience: '6+',
      students: '80+'
    }
  ];
}