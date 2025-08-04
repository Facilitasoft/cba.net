import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="about">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2>SOBRE NOSSA <span>ACADEMIA</span></h2>
            <p class="lead">Há mais de 8 anos, somos referência em treinamento de boxe, formando campeões e transformando vidas através do esporte.</p>
            <p>Nossa academia oferece um ambiente profissional e motivador, com equipamentos de última geração e instrutores experientes. Aqui, você não apenas aprende boxe, mas desenvolve disciplina, autoconfiança e superação.</p>
            
            <div class="features">
              <div class="feature">
                <div class="feature-icon">🥊</div>
                <div>
                  <h4>Treino Profissional</h4>
                  <p>Equipamentos de alta qualidade e técnicas profissionais</p>
                </div>
              </div>
              <div class="feature">
                <div class="feature-icon">👥</div>
                <div>
                  <h4>Instrutores Qualificados</h4>
                  <p>Equipe experiente com certificações nacionais</p>
                </div>
              </div>
              <div class="feature">
                <div class="feature-icon">🏆</div>
                <div>
                  <h4>Resultados Comprovados</h4>
                  <p>Centenas de alunos satisfeitos e campeões formados</p>
                </div>
              </div>
            </div>
          </div>
          <div class="about-image">
            <img src="https://images.pexels.com/photos/4752613/pexels-photo-4752613.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" alt="Academia de Boxe">
            <div class="image-overlay">
              <div class="play-button">▶</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      padding: 6rem 0;
      background: #f9fafb;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .about-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .about-text h2 {
      font-size: 2.5rem;
      font-weight: 900;
      margin-bottom: 1.5rem;
      color: #1f2937;
      line-height: 1.2;
    }

    .about-text span {
      color: #dc2626;
    }

    .lead {
      font-size: 1.3rem;
      font-weight: 600;
      color: #4b5563;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .about-text p {
      font-size: 1.1rem;
      line-height: 1.7;
      color: #6b7280;
      margin-bottom: 2rem;
    }

    .features {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .feature {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1.5rem;
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .feature:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }

    .feature-icon {
      font-size: 2rem;
      background: linear-gradient(45deg, #dc2626, #fbbf24);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      flex-shrink: 0;
    }

    .feature h4 {
      font-size: 1.2rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 0.5rem;
    }

    .feature p {
      color: #6b7280;
      margin: 0;
    }

    .about-image {
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    .about-image img {
      width: 100%;
      height: 500px;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .image-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(45deg, rgba(220, 38, 38, 0.3), rgba(0, 0, 0, 0.3));
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .about-image:hover .image-overlay {
      opacity: 1;
    }

    .about-image:hover img {
      transform: scale(1.1);
    }

    .play-button {
      width: 80px;
      height: 80px;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      color: #dc2626;
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .play-button:hover {
      transform: scale(1.1);
    }

    @media (max-width: 768px) {
      .about {
        padding: 4rem 0;
      }

      .about-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .about-text h2 {
        font-size: 2rem;
        text-align: center;
      }

      .about-image {
        order: -1;
      }

      .about-image img {
        height: 300px;
      }
    }
  `]
})
export class AboutComponent {}