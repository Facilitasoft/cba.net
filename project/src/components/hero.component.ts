import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="home" class="hero">
      <div class="hero-content">
        <h1>
          CAMPEONATO DE
          <span>BOXE PARA ALUNOS</span>
        </h1>
        <p>
          O Campeonato de	Boxe para Alunos visa incentivar a prática do boxe, 
          promovendo a integração entre alunos estreantes, com lutas e campeões, 
          tanto no gênero masculino quanto no feminino.
        </p>
        <div class="hero-buttons">
          <a href="#inscricao" class="btn-primary">Inscrever-se</a>
          <!-- <a href="#about" class="btn-secondary">Saiba Mais</a> -->
        </div>
      </div>
      <div class="hero-stats">
        <div class="stat">
          <h3>+20</h3>
          <p>Eventos realizados</p>
        </div>
        <div class="stat">
          <h3>+8</h3>
          <p>Anos de Experiência</p>
        </div>
        <!-- <div class="stat">
          <h3>15</h3>
          <p>Instrutores</p>
        </div> -->
      </div>
    </section>
  `,
  styles: [`
    .hero {
      height: 100vh;
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                  url('https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop') center/cover;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      color: white;
      text-align: center;
    }

    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(45deg, rgba(220, 38, 38, 0.1), rgba(0, 0, 0, 0.8));
    }

    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 800px;
      padding: 0 0rem;
      animation: fadeInUp 1s ease;
    }

    .hero-content h1 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 900;
      margin-bottom: 1.5rem;
      line-height: 1.2;
      letter-spacing: 2px;
    }

    .hero-content span {
      color: #dc2626;
      background: linear-gradient(45deg, #dc2626, #fbbf24);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-content p {
      font-size: 1.2rem;
      margin-bottom: 2.5rem;
      line-height: 1.6;
      opacity: 0.9;
    }

    .hero-buttons {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn-primary {
      background: linear-gradient(45deg, #dc2626, #b91c1c);
      color: white;
      padding: 1rem 2.5rem;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.1rem;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);
      border: 2px solid transparent;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(220, 38, 38, 0.4);
      background: linear-gradient(45deg, #b91c1c, #dc2626);
    }

    .btn-secondary {
      background: transparent;
      color: white;
      padding: 1rem 2.5rem;
      border: 2px solid white;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.1rem;
      transition: all 0.3s ease;
    }

    .btn-secondary:hover {
      background: white;
      color: #000;
      transform: translateY(-2px);
    }

    .hero-stats {
      position: absolute;
      bottom: 4rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 4rem;
      z-index: 2;
    }

    .stat {
      text-align: center;
      animation: fadeInUp 1s ease 0.5s both;
    }

    .stat h3 {
      font-size: 2.5rem;
      font-weight: 900;
      color: #dc2626;
      margin-bottom: 0.5rem;
    }

    .stat p {
      font-size: 0.9rem;
      opacity: 0.8;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .hero {
        height: auto;
        min-height: 400px;
        flex-direction: column;
        padding: 2rem 0.5rem;
      }
      .hero-content {
        padding: 0 0.5rem;
      }
      .hero-stats {
        position: static;
        transform: none;
        flex-direction: row;
        gap: 1.2rem;
        margin-top: 2rem;
        justify-content: center;
      }
      .stat h3 {
        font-size: 1.5rem;
      }
      .hero-buttons {
        flex-direction: column;
        align-items: stretch;
        gap: 0.7rem;
      }
      .btn-primary,
      .btn-secondary {
        width: 100%;
        min-width: 0;
        font-size: 1rem;
        padding: 0.8rem 1rem;
      }
      .hero-content h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      .hero-content p {
        font-size: 1rem;
        margin-bottom: 1.2rem;
      }
    }

    @media (max-width: 480px) {
      .hero {
        height: auto;
        min-height: 300px;
        flex-direction: column;
        padding: 1rem 0.2rem;
      }
      .hero-content {
        padding: 0 0.2rem;
      }
      .hero-stats {
        flex-direction: column;
        gap: 0.7rem;
        margin-top: 1rem;
        align-items: center;
      }
      .stat h3 {
        font-size: 1.1rem;
      }
      .stat p {
        font-size: 0.8rem;
      }
      .hero-content h1 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
      }
      .hero-content p {
        font-size: 0.9rem;
        margin-bottom: 0.7rem;
      }
      .hero-buttons {
        gap: 0.5rem;
      }
      .btn-primary,
      .btn-secondary {
        width: 100%;
        min-width: 0;
        font-size: 0.95rem;
        padding: 0.7rem 0.5rem;
      }
    }
  `]
})
export class HeroComponent { }