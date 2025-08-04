import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="pricing" class="pricing">
      <div class="container">
        <div class="section-header">
          <h2>ESCOLHA SEU <span>PLANO</span></h2>
          <p>Planos flexíveis para todos os objetivos e orçamentos</p>
        </div>
        
        <div class="pricing-grid">
          <div class="price-card" [class.featured]="plan.featured" *ngFor="let plan of plans">
            <div class="card-header">
              <h3>{{plan.name}}</h3>
              <div class="price">
                <span class="currency">R$</span>
                <span class="amount">{{plan.price}}</span>
                <span class="period">/mês</span>
              </div>
              <p class="plan-description">{{plan.description}}</p>
            </div>
            
            <div class="card-body">
              <ul class="features-list">
                <li *ngFor="let feature of plan.features" class="feature-item">
                  <span class="check">✓</span>
                  {{feature}}
                </li>
              </ul>
            </div>
            
            <div class="card-footer">
              <button class="plan-btn" [class.featured-btn]="plan.featured">
                {{plan.buttonText}}
              </button>
            </div>
          </div>
        </div>
        
        <div class="guarantee">
          <p>🏆 <strong>Garantia de 30 dias</strong> - Se não ficar satisfeito, devolvemos seu dinheiro</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .pricing {
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

    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .price-card {
      background: #374151;
      border-radius: 20px;
      padding: 2rem;
      position: relative;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border: 2px solid transparent;
    }

    .price-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    }

    .price-card.featured {
      border-color: #dc2626;
      background: linear-gradient(135deg, #374151 0%, #4b5563 100%);
      transform: scale(1.05);
    }

    .price-card.featured::before {
      content: 'MAIS POPULAR';
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(45deg, #dc2626, #fbbf24);
      color: white;
      padding: 0.5rem 2rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 1px;
    }

    .card-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .card-header h3 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: white;
    }

    .price {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
    }

    .currency {
      font-size: 1.2rem;
      color: #9ca3af;
      margin-right: 0.2rem;
    }

    .amount {
      font-size: 3rem;
      font-weight: 900;
      color: #dc2626;
    }

    .period {
      font-size: 1rem;
      color: #9ca3af;
      margin-left: 0.2rem;
    }

    .plan-description {
      color: #d1d5db;
      font-size: 1rem;
    }

    .features-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .feature-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.75rem 0;
      color: #d1d5db;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .feature-item:last-child {
      border-bottom: none;
    }

    .check {
      color: #10b981;
      font-weight: bold;
      font-size: 1.2rem;
      width: 20px;
      flex-shrink: 0;
    }

    .card-footer {
      margin-top: 2rem;
    }

    .plan-btn {
      width: 100%;
      background: linear-gradient(45deg, #6b7280, #9ca3af);
      color: white;
      border: none;
      padding: 1rem;
      border-radius: 12px;
      font-weight: 600;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .plan-btn:hover {
      background: linear-gradient(45deg, #9ca3af, #6b7280);
      transform: translateY(-2px);
    }

    .featured-btn {
      background: linear-gradient(45deg, #dc2626, #b91c1c) !important;
    }

    .featured-btn:hover {
      background: linear-gradient(45deg, #b91c1c, #dc2626) !important;
    }

    .guarantee {
      text-align: center;
      padding: 2rem;
      background: rgba(220, 38, 38, 0.1);
      border-radius: 12px;
      border: 1px solid rgba(220, 38, 38, 0.3);
    }

    .guarantee p {
      color: #fbbf24;
      font-size: 1.1rem;
      margin: 0;
    }

    @media (max-width: 768px) {
      .pricing {
        padding: 4rem 0;
      }

      .pricing-grid {
        grid-template-columns: 1fr;
      }

      .price-card.featured {
        transform: none;
      }

      .price-card {
        max-width: 350px;
        margin: 0 auto;
      }
    }
  `]
})
export class PricingComponent {
  plans = [
    {
      name: 'Básico',
      price: '89',
      description: 'Ideal para iniciantes',
      features: [
        '2x por semana',
        'Acesso a todas as modalidades',
        'Vestiário com armários',
        'Avaliação física inicial'
      ],
      buttonText: 'Inscrever-se agora',
      featured: false
    },
    {
      name: 'Premium',
      price: '149',
      description: 'O mais escolhido pelos alunos',
      features: [
        'Acesso ilimitado',
        'Todas as modalidades',
        'Personal trainer 1x/mês',
        'Plano nutricional',
        'Vestiário VIP',
        'Aulas exclusivas'
      ],
      buttonText: 'Melhor Escolha',
      featured: true
    },
    {
      name: 'Competitivo',
      price: '249',
      description: 'Para atletas sérios',
      features: [
        'Acesso ilimitado',
        'Treinamento competitivo',
        'Personal trainer semanal',
        'Acompanhamento nutricional',
        'Participação em torneios',
        'Equipamentos profissionais'
      ],
      buttonText: 'Virar Pro',
      featured: false
    }
  ];
}