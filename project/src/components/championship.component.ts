import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroComponent } from "./hero.component";

@Component({
  selector: 'app-championship',
  standalone: true,
  imports: [CommonModule, HeroComponent],
  template: `
    <div class="championship-page">
      <app-hero></app-hero>
      <div class="championship-content py-5">
        <div class="container">
          <!-- Informações Principais -->
          <section class="main-info mb-5">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              <div class="col" *ngFor="let info of [
                {icon:'💰', title:'Valor da Inscrição', value:'R$ 200,00', desc:'Por aluno participante', class:'price'},
                {icon:'📍', title:'Local', value:'Academia Cornerman', desc:'Rua Mergenthaler, 900<br>Vila Leopoldina - São Paulo', class:'location'},
                {icon:'🎟️', title:'Entrada Público', value:'R$ 50,00', desc:'Por pessoa para assistir', class:'price'},
                {icon:'⚖️', title:'Pesagem', value:'13h às 14h', desc:'No local dos combates', class:'time'}
              ]">
                <div class="info-card h-100 d-flex flex-column align-items-center justify-content-center text-center">
                  <div class="card-icon">{{info.icon}}</div>
                  <h3>{{info.title}}</h3>
                  <p [ngClass]="info.class" [innerHTML]="info.value"></p>
                  <p [innerHTML]="info.desc"></p>
                </div>
              </div>
            </div>
          </section>

          <!-- Categorias de Alunos -->
          <section class="student-categories mb-5">
            <h2 class="text-center mb-4">CATEGORIAS DE <span>ALUNOS</span></h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="category-card h-100 text-center p-4">
                  <div class="category-icon">🌟</div>
                  <h4>Estreante</h4>
                  <p>Aluno que nunca participou de competições de boxe ou qualquer esporte de combate.</p>
                </div>
              </div>
              <div class="col">
                <div class="category-card h-100 text-center p-4">
                  <div class="category-icon">🥊</div>
                  <h4>Com Lutas</h4>
                  <p>Já participaram de lutas de alunos mas nunca foram campeões. Nunca lutaram com luvas menores que 18 oz.</p>
                </div>
              </div>
              <div class="col">
                <div class="category-card h-100 text-center p-4">
                  <div class="category-icon">🏆</div>
                  <h4>Campeão</h4>
                  <p>Venceram na final do campeonato em sua categoria ou em qualquer evento de entretenimento de alunos.</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Divisão de Idades -->
          <section class="age-divisions mb-5">
            <h2 class="text-center mb-4">DIVISÃO DE <span>IDADES</span></h2>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              <div class="col" *ngFor="let age of ageCategories">
                <div class="age-card h-100 text-center p-3">
                  <h4>{{age.name}}</h4>
                  <p class="age-range">{{age.range}}</p>
                  <p class="rounds-info">{{age.rounds}}</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Categorias de Peso -->
          <section class="weight-categories mb-5">
            <h2 class="text-center mb-2">CATEGORIAS DE <span>PESO</span></h2>
            <p class="subtitle text-center">Masculino e Feminino</p>
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
              <div class="col" *ngFor="let weight of weightCategories">
                <div class="weight-card h-100 text-center p-3">
                  <h4>{{weight.name}}</h4>
                  <p class="weight-limit">{{weight.limit}}</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Documentação Obrigatória -->
          <section class="documentation mb-5">
            <h2 class="text-center mb-4">DOCUMENTAÇÃO <span>OBRIGATÓRIA</span></h2>
            <div class="row row-cols-1 row-cols-md-2 g-4">
              <div class="col" *ngFor="let doc of requiredDocs">
                <div class="doc-item h-100 d-flex align-items-start gap-3 p-3">
                  <div class="doc-icon">{{doc.icon}}</div>
                  <div class="doc-content">
                    <h4>{{doc.title}}</h4>
                    <p>{{doc.description}}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Equipamentos -->
          <section class="equipment mb-5">
            <h2 class="text-center mb-4">EQUIPAMENTOS <span>OBRIGATÓRIOS</span></h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col" *ngFor="let item of equipment">
                <div class="equipment-item h-100 text-center p-3">
                  <div class="equipment-icon">{{item.icon}}</div>
                  <h4>{{item.name}}</h4>
                  <p>{{item.description}}</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Premiação -->
          <section class="awards mb-5">
            <h2 class="text-center mb-4">CLASSIFICAÇÃO E <span>PREMIAÇÃO</span></h2>
            <div class="row g-4 mb-3">
              <div class="col-12 col-md-6">
                <div class="award-card individual h-100 p-4">
                  <h3>🏆 Premiação Individual</h3>
                  <ul class="mb-0">
                    <li><strong>1º Lugar:</strong> Cinturão de Ouro</li>
                    <li><strong>2º Lugar:</strong> Medalha de Prata</li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="award-card team h-100 p-4">
                  <h3>🏅 Premiação por Equipe</h3>
                  <ul class="mb-0">
                    <li><strong>1º Lugar:</strong> Troféu</li>
                    <li><strong>2º Lugar:</strong> Troféu</li>
                    <li><strong>3º Lugar:</strong> Troféu</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="scoring-info p-4">
              <h4>Sistema de Pontuação por Equipe:</h4>
              <p>• Vitória nas preliminares: <strong>1 ponto</strong></p>
              <p>• Vitória nas semifinais: <strong>2 pontos</strong></p>
              <p>• Vitória nas finais: <strong>3 pontos</strong></p>
            </div>
          </section>

          <!-- Apoiadores -->
          <section class="sponsors mb-5">
            <h2 class="text-center mb-2">NOSSOS <span>APOIADORES</span></h2>
            <p class="subtitle text-center">Agradecemos o apoio fundamental de nossos parceiros</p>
            <div class="row g-4 mb-4">
              <div class="col-12">
                <h3 class="text-center">🤝 Apoiadores</h3>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                  <div class="col" *ngFor="let sponsor of regularSponsors">
                    <div class="sponsor-card h-100 text-center p-4">
                      <div class="sponsor-logo mx-auto mb-3">
                        <img [src]="sponsor.logo" [alt]="sponsor.name" class="img-fluid" />
                      </div>
                      <h4>{{sponsor.name}}</h4>
                      <p>{{sponsor.description}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="become-sponsor p-4 mt-4 text-center">
              <h3>🤝 Seja um Apoiador</h3>
              <p>Interessado em apoiar o desenvolvimento do boxe brasileiro? Entre em contato conosco!</p>
            </div>
          </section>

          <!-- Inscrição -->
          <section class="registration mb-5" id="inscricao">
            <div class="registration-card mx-auto p-4">
              <h2 class="text-center">FAÇA SUA <span>INSCRIÇÃO</span></h2>
              <p class="text-center">Período: <strong>17/06/2025 a 30/06/2025</strong></p>
              <div class="row g-4">
                <div class="col-12 col-md-6">
                  <div class="registration-requirements h-100 p-3">
                    <h3>📋 Dados Necessários para Inscrição:</h3>
                    <ul class="mb-0">
                      <li>Nome Completo</li>
                      <li>Categoria: Aluno estreante, Aluno com lutas ou Aluno Campeão</li>
                      <li>Telefone</li>
                      <li>RG</li>
                      <li>Gênero: Feminino ou Masculino</li>
                      <li>Ano de Nascimento</li>
                      <li>Peso (conforme tabela)</li>
                      <li>Nome da Equipe</li>
                      <li>Aceite do termo de participação</li>
                    </ul>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="important-notes h-100 p-3">
                    <h3>⚠️ Informações Importantes:</h3>
                    <ul class="mb-0">
                      <li>Não haverá tolerância na balança</li>
                      <li>Valor só será devolvido se não houver adversário</li>
                      <li>Cada equipe tem direito a 2 técnicos sem pagar entrada</li>
                      <li>Alunos inscritos não pagam entrada</li>
                      <li>Fraudes resultam em desclassificação sem reembolso</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="mt-4">
                <button class="register-btn w-100" (click)="register()">Fazer Inscrição</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .championship-page {
      min-height: 100vh; 
    }

    /* Garante que cada seção tenha espaçamento vertical suficiente */
    section {
      margin-bottom: 3rem !important;
    }

    /* Garante espaçamento entre cards e colunas Bootstrap */
    .row > [class^="col"] {
      margin-bottom: 1.5rem;
    }

    /* Evita sobreposição de cards em telas pequenas */
    .info-card, .category-card, .age-card, .weight-card, .doc-item, .equipment-item, .award-card, .sponsor-card {
      min-width: 0;
      min-height: 100px;
      word-break: break-word;
      z-index: 1;
      position: relative;
    }

    /* Garante que o botão de inscrição não sobreponha nada */
    .register-btn {
      margin-top: 1.5rem;
      z-index: 2;
      position: relative;
    }

    /* Corrige possíveis sobreposições em colunas pequenas */
    @media (max-width: 600px) {
      .row > [class^="col"] {
        margin-bottom: 1.2rem;
      }
      section {
        margin-bottom: 2rem !important;
      }
    }

    .championship-hero {
      height: 70vh;
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                  url('https://images.pexels.com/photos/4761792/pexels-photo-4761792.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop') center/cover;
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
      background: linear-gradient(45deg, rgba(220, 38, 38, 0.2), rgba(0, 0, 0, 0.8));
    }

    .hero-content {
      z-index: 2;
      max-width: 900px;
    }

    .hero-content h1 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 900;
      margin-bottom: 0.5rem;
      line-height: 1.2;
      letter-spacing: 2px;
    }

    .hero-content span {
      color: #fbbf24;
      background: linear-gradient(45deg, #dc2626, #fbbf24);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .subtitle {
      font-size: 1.5rem;
      font-weight: 700;
      color: #fbbf24;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .hero-content > p:not(.subtitle) {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.9;
      line-height: 1.6;
    }

    .event-dates {
      display: flex;
      gap: 3rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .date-section {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      padding: 2rem;
      border-radius: 15px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      min-width: 250px;
    }

    .date-section h3 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      color: #fbbf24;
    }

    .date-section p {
      margin: 0.5rem 0;
      font-size: 1.1rem;
    }

    .championship-content {
      padding: 4rem 0;
      background: #f9fafb;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    section {
      margin-bottom: 4rem;
    }

    h2 {
      font-size: clamp(2rem, 4vw, 2.5rem);
      font-weight: 900;
      text-align: center;
      margin-bottom: 3rem;
      color: #1f2937;
      line-height: 1.2;
    }

    h2 span {
      color: #dc2626;
    }

    .subtitle {
      text-align: center;
      font-size: clamp(1rem, 2.5vw, 1.2rem);
      color: #6b7280;
      margin-bottom: 2rem;
      line-height: 1.4;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
    }

    .info-card {
      background: white;
      padding: 2rem;
      border-radius: 20px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
      min-width: 0;
    }

    .info-card:hover {
      transform: translateY(-5px);
    }

    @media (max-width: 900px) {
      .info-grid {
        grid-template-columns: 1fr 1fr;
        gap: 1.2rem;
      }
    }

    @media (max-width: 600px) {
      .info-grid {
        grid-template-columns: 1fr;
        gap: 0.7rem;
      }
      .info-card {
        padding: 0.7rem;
        border-radius: 8px;
        font-size: 0.95rem;
      }
      .card-icon {
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }
      .info-card h3 {
        font-size: 1rem;
      }
      .price {
        font-size: 1.2rem;
      }
      .location, .time {
        font-size: 1rem;
      }
    }

    .card-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .info-card h3 {
      font-size: 1.2rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 1rem;
    }

    .price {
      font-size: 2rem;
      font-weight: 900;
      color: #dc2626;
      margin-bottom: 0.5rem;
    }

    .location, .time {
      font-size: 1.3rem;
      font-weight: 700;
      color: #dc2626;
      margin-bottom: 0.5rem;
    }

    .categories-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    @media (max-width: 900px) {
      .categories-grid {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }
    }

    @media (max-width: 600px) {
      .categories-grid {
        grid-template-columns: 1fr;
        gap: 0.7rem;
      }
      .category-card {
        padding: 0.7rem;
        border-radius: 8px;
        font-size: 0.95rem;
      }
      .category-icon {
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }
      .category-card h4 {
        font-size: 1rem;
      }
    }

    .category-card {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      text-align: center;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
      border-top: 4px solid #dc2626;
    }

    .category-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .category-card h4 {
      font-size: 1.3rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 1rem;
    }

    .category-card p {
      color: #6b7280;
      line-height: 1.6;
    }

    .ages-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
    }

    @media (max-width: 900px) {
      .ages-grid {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }
    }

    @media (max-width: 600px) {
      .ages-grid {
        grid-template-columns: 1fr;
        gap: 0.7rem;
      }
      .age-card {
        padding: 0.7rem;
        border-radius: 8px;
        font-size: 0.95rem;
      }
      .age-card h4 {
        font-size: 1rem;
      }
      .age-range {
        font-size: 0.9rem;
      }
    }

    .age-card {
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
      border-left: 4px solid #fbbf24;
    }

    .age-card h4 {
      font-size: 1.1rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 0.5rem;
    }

    .age-range {
      font-size: 1rem;
      font-weight: 600;
      color: #dc2626;
      margin-bottom: 0.5rem;
    }

    .rounds-info {
      font-size: 0.9rem;
      color: #6b7280;
      margin: 0;
    }

    .weights-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
    }

    @media (max-width: 900px) {
      .weights-grid {
        grid-template-columns: 1fr 1fr;
        gap: 0.7rem;
      }
    }

    @media (max-width: 600px) {
      .weights-grid {
        grid-template-columns: 1fr;
        gap: 0.5rem;
      }
      .weight-card {
        padding: 0.7rem;
        border-radius: 8px;
        font-size: 0.95rem;
      }
      .weight-card h4 {
        font-size: 1rem;
      }
      .weight-limit {
        font-size: 0.9rem;
      }
    }

    .weight-card {
      background: white;
      padding: 1.5rem;
      border-radius: 10px;
      text-align: center;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      border-bottom: 3px solid #dc2626;
    }

    .weight-card h4 {
      font-size: 1rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 0.5rem;
    }

    .weight-limit {
      font-size: 0.9rem;
      font-weight: 700;
      color: #dc2626;
      margin: 0;
    }

    .docs-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    @media (max-width: 600px) {
      .docs-grid {
        grid-template-columns: 1fr;
        gap: 0.7rem;
      }
      .doc-item {
        padding: 0.7rem;
        border-radius: 8px;
        font-size: 0.95rem;
        flex-direction: column;
        text-align: center;
        gap: 0.5rem;
      }
      .doc-icon {
        font-size: 1.5rem;
      }
      .doc-content h4 {
        font-size: 1rem;
      }
    }

    .doc-item {
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
    }

    .doc-icon {
      font-size: 2rem;
      flex-shrink: 0;
    }

    .doc-content h4 {
      font-size: 1.1rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 0.5rem;
    }

    .doc-content p {
      color: #6b7280;
      margin: 0;
      font-size: 0.95rem;
    }

    .equipment-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }

    @media (max-width: 900px) {
      .equipment-grid {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }
    }

    @media (max-width: 600px) {
      .equipment-grid {
        grid-template-columns: 1fr;
        gap: 0.7rem;
      }
      .equipment-item {
        padding: 0.7rem;
        border-radius: 8px;
        font-size: 0.95rem;
      }
      .equipment-icon {
        font-size: 1.5rem;
      }
      .equipment-item h4 {
        font-size: 1rem;
      }
    }

    .equipment-item {
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
    }

    .equipment-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .equipment-item h4 {
      font-size: 1.1rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 0.5rem;
    }

    .equipment-item p {
      color: #6b7280;
      margin: 0;
      font-size: 0.9rem;
    }

    .awards-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin-bottom: 2rem;
    }

    @media (max-width: 600px) {
      .awards-grid {
        grid-template-columns: 1fr;
        gap: 0.7rem;
      }
      .award-card {
        padding: 0.7rem;
        border-radius: 8px;
        font-size: 0.95rem;
      }
      .award-card h3 {
        font-size: 1rem;
      }
    }

    .award-card {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    }

    .award-card.individual {
      border-top: 4px solid #fbbf24;
    }

    .award-card.team {
      border-top: 4px solid #dc2626;
    }

    .award-card h3 {
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #1f2937;
    }

    .award-card ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .award-card li {
      padding: 0.5rem 0;
      color: #6b7280;
      border-bottom: 1px solid #e5e7eb;
    }

    .award-card li:last-child {
      border-bottom: none;
    }

    .scoring-info {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
      border-left: 4px solid #10b981;
    }

    .scoring-info h4 {
      font-size: 1.2rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 1rem;
    }

    .scoring-info p {
      color: #6b7280;
      margin: 0.5rem 0;
    }

    .sponsors {
      background: white;
      padding: 4rem 2rem;
      border-radius: 25px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
      margin-bottom: 4rem;
    }

    .sponsors-grid {
      margin-bottom: 3rem;
    }

    .sponsor-category {
      margin-bottom: 3rem;
    }

    .sponsor-category h3 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1f2937;
      text-align: center;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 3px solid #dc2626;
    }

    .main-sponsors {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      justify-items: center;
    }

    .regular-sponsors, .technical-sponsors {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
      gap: 1.5rem;
    }

    .sponsor-card {
      background: #f9fafb;
      padding: 2rem;
      border-radius: 15px;
      text-align: center;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      border: 2px solid transparent;
    }

    .sponsor-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
      border-color: #dc2626;
    }

    .sponsor-card.main {
      background: linear-gradient(135deg, #fbbf24 0%, #dc2626 100%);
      color: white;
      padding: 3rem;
      border: 3px solid #fbbf24;
    }

    .sponsor-card.main:hover {
      border-color: white;
    }

    .sponsor-logo {
      width: 120px;
      height: 120px;
      margin: 0 auto 1.5rem;
      background: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .sponsor-card.main .sponsor-logo {
      width: 150px;
      height: 150px;
      border: 3px solid white;
    }

    .sponsor-logo img {
      max-width: 80%;
      max-height: 80%;
      object-fit: contain;
    }

    .sponsor-card h4 {
      font-size: 1.2rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 1rem;
    }

    .sponsor-card.main h4 {
      color: white;
      font-size: 1.4rem;
    }

    .sponsor-card p {
      color: #6b7280;
      font-size: 0.95rem;
      line-height: 1.5;
      margin: 0;
    }

    .sponsor-card.main p {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1rem;
    }

    .become-sponsor {
      background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
      color: white;
      padding: 3rem;
      border-radius: 20px;
      text-align: center;
      margin-top: 2rem;
    }

    .become-sponsor h3 {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #fbbf24;
    }

    .become-sponsor p {
      font-size: 1.1rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .sponsor-btn {
      background: linear-gradient(45deg, #dc2626, #fbbf24);
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 25px;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .sponsor-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(220, 38, 38, 0.4);
    }

    .registration-card {
      background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
      color: white;
      padding: 3rem;
      border-radius: 25px;
      max-width: 1000px;
      margin: 0 auto;
    }

    .registration-card h2 {
      color: white;
      margin-bottom: 1rem;
    }

    .registration-card span {
      color: #fbbf24;
    }

    .registration-card > p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.9;
      text-align: center;
    }

    .registration-info {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .payment-info, .contact-info {
      background: rgba(255, 255, 255, 0.1);
      padding: 2rem;
      border-radius: 15px;
      backdrop-filter: blur(10px);
    }

    .payment-info h3, .contact-info h3 {
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #fbbf24;
    }

    .payment-info p, .contact-info p {
      margin: 0.5rem 0;
      font-size: 1rem;
    }

    .registration-requirements {
      background: rgba(255, 255, 255, 0.1);
      padding: 2rem;
      border-radius: 15px;
      margin-bottom: 2rem;
      backdrop-filter: blur(10px);
    }

    .registration-requirements h3 {
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #fbbf24;
    }

    .registration-requirements ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .registration-requirements li {
      padding: 0.5rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .registration-requirements li:last-child {
      border-bottom: none;
    }

    .important-notes {
      background: rgba(220, 38, 38, 0.2);
      padding: 2rem;
      border-radius: 15px;
      margin-bottom: 2rem;
      border: 1px solid rgba(220, 38, 38, 0.3);
    }

    .important-notes h3 {
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #fbbf24;
    }

    .important-notes ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .important-notes li {
      padding: 0.5rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .important-notes li:last-child {
      border-bottom: none;
    }

    .register-btn {
      width: 100%;
      background: linear-gradient(45deg, #dc2626, #fbbf24);
      color: white;
      border: none;
      padding: 1.5rem;
      border-radius: 15px;
      font-weight: 700;
      font-size: 1.2rem;
      cursor: pointer;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .register-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(220, 38, 38, 0.4);
    }

    @media (max-width: 768px) {
      .championship-hero {
        height: 60vh;
      }

      .hero-content h1 {
        font-size: 2.5rem;
      }

      .event-dates {
        flex-direction: column;
        gap: 1.5rem;
      }

      .date-section {
        min-width: auto;
        padding: 1.5rem;
      }

      .championship-content {
        padding: 2rem 0;
      }

      .container {
        padding: 0 1rem;
      }

      h2 {
        font-size: 2rem;
        margin-bottom: 2rem;
      }

      .info-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .info-card {
        padding: 1.5rem;
      }

      .categories-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .category-card {
        padding: 1.5rem;
      }

      .ages-grid {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
      }

      .age-card {
        padding: 1rem;
      }

      .weights-grid {
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 0.8rem;
      }

      .weight-card {
        padding: 1rem;
      }

      .docs-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .doc-item {
        padding: 1.2rem;
        flex-direction: column;
        text-align: center;
        gap: 0.8rem;
      }

      .equipment-grid {
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: 1rem;
      }

      .equipment-item {
        padding: 1.2rem;
      }

      .awards-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .award-card {
        padding: 1.5rem;
      }

      .scoring-info {
        padding: 1.5rem;
      }

      .sponsors {
        padding: 2rem 1rem;
        margin-bottom: 2rem;
      }

      .sponsor-category h3 {
        font-size: 1.3rem;
        margin-bottom: 1.5rem;
      }

      .main-sponsors {
        grid-template-columns: 1fr;
      }

      .regular-sponsors, .technical-sponsors {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .sponsor-card {
        padding: 1.5rem;
      }

      .sponsor-card.main {
        padding: 2rem;
      }

      .sponsor-logo {
        width: 100px;
        height: 100px;
        margin-bottom: 1rem;
      }

      .sponsor-card.main .sponsor-logo {
        width: 120px;
        height: 120px;
      }

      .become-sponsor {
        padding: 2rem;
        margin-top: 1.5rem;
      }

      .become-sponsor h3 {
        font-size: 1.5rem;
      }

      .registration-card {
        padding: 2rem;
        margin: 0 1rem;
      }

      .registration-info {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .payment-info, .contact-info {
        padding: 1.5rem;
      }

      .registration-requirements {
        padding: 1.5rem;
      }

      .important-notes {
        padding: 1.5rem;
      }

      .register-btn {
        padding: 1.2rem;
        font-size: 1rem;
      }
    }

    @media (max-width: 200px) {
      html, body, .championship-page, .championship-content, .container {
        width: 100vw !important;
        min-width: 0 !important;
        max-width: 100vw !important;
        margin: 0 !important;
        padding: 0 !important;
        overflow-x: hidden !important;
        box-sizing: border-box !important;
      }
      .championship-content {
        padding: 0 !important;
      }
      .container {
        padding: 0 0.1rem !important;
      }
      .hero-content {
        padding: 0 0.2rem !important;
      }
      .championship-hero {
        height: auto !important;
        min-height: 300px !important;
      }
      .hero-content h1 {
        font-size: 1.1rem !important;
        margin-bottom: 0.2rem !important;
      }
      .subtitle {
        font-size: 0.9rem !important;
        margin-bottom: 0.5rem !important;
      }
      .date-section {
        padding: 0.3rem !important;
        min-width: unset !important;
        font-size: 0.9rem !important;
      }
      h2 {
        font-size: 1rem !important;
        margin-bottom: 1rem !important;
      }
      .info-grid,
      .categories-grid,
      .ages-grid,
      .weights-grid,
      .docs-grid,
      .equipment-grid,
      .awards-grid,
      .regular-sponsors,
      .technical-sponsors {
        display: block !important;
        gap: 0 !important;
      }
      .info-card, .category-card, .age-card, .weight-card, .doc-item, .equipment-item, .award-card, .sponsor-card {
        padding: 0.7rem !important;
        border-radius: 8px !important;
        min-width: 0 !important;
        width: 100% !important;
        box-sizing: border-box !important;
        margin-bottom: 0.7rem !important;
      }
      .card-icon, .category-icon, .equipment-icon {
        font-size: 1.2rem !important;
        margin-bottom: 0.3rem !important;
        min-width: 1.2rem !important;
      }
      .price, .location, .time {
        font-size: 0.95rem !important;
        word-break: break-word !important;
      }
      .sponsor-logo {
        width: 40px !important;
        height: 40px !important;
        margin-bottom: 0.5rem !important;
        min-width: 40px !important;
      }
      .sponsor-card.main .sponsor-logo {
        width: 60px !important;
        height: 60px !important;
        min-width: 60px !important;
      }
      .sponsor-card h4, .sponsor-card.main h4 {
        font-size: 0.8rem !important;
        word-break: break-word !important;
      }
      .become-sponsor {
        padding: 1rem !important;
        border-radius: 10px !important;
        min-width: 0 !important;
      }
      .become-sponsor h3 {
        font-size: 0.9rem !important;
      }
      .registration-card {
        padding: 0.7rem !important;
        border-radius: 8px !important;
        max-width: 100% !important;
        min-width: 0 !important;
      }
      .registration-card h2 {
        font-size: 1rem !important;
        word-break: break-word !important;
      }
      .registration-card > p {
        font-size: 0.9rem !important;
        margin-bottom: 1rem !important;
      }
      .registration-requirements, .important-notes {
        padding: 0.7rem !important;
        font-size: 0.85rem !important;
        border-radius: 8px !important;
        min-width: 0 !important;
      }
      .registration-requirements h3, .important-notes h3 {
        font-size: 0.9rem !important;
        word-break: break-word !important;
      }
      .register-btn {
        padding: 0.7rem !important;
        font-size: 0.9rem !important;
        border-radius: 8px !important;
        min-width: 0 !important;
      }
    }
  `]
})
export class ChampionshipComponent {

  ageCategories = [
    {
      name: 'MIRIM',
      range: '11 a 12 anos',
      rounds: '3 rounds de 1 min com 1 minuto de descanso'
    },
    {
      name: 'INFANTIL',
      range: '13 a 14 anos',
      rounds: '3 rounds de 1min30s com 1 minuto de descanso'
    },
    {
      name: 'CADETE',
      range: '15 a 16 anos',
      rounds: '3 rounds de 2 min com 1 minuto de descanso'
    },
    {
      name: 'JUVENIL',
      range: '17 a 18 anos',
      rounds: '3 rounds de 2 min com 1 minuto de descanso'
    },
    {
      name: 'ADULTO 1',
      range: '19 a 40 anos',
      rounds: '3 rounds de 2 min com 1 minuto de descanso'
    },
    {
      name: 'ADULTO 2',
      range: '41 a 50 anos',
      rounds: '3 rounds de 2 min com 1 minuto de descanso'
    },
    {
      name: 'ADULTO 3',
      range: '51 a 55 anos',
      rounds: '3 rounds de 2 min com 1 minuto de descanso'
    }
  ];

  weightCategories = [
    { name: 'Peso Galo Ligeiro', limit: 'até 46kg' },
    { name: 'Peso Galo', limit: 'De 47kg até 51kg' },
    { name: 'Peso Pena Ligeiro', limit: 'De 52kg até 56kg' },
    { name: 'Peso Pena', limit: 'De 57kg até 61kg' },
    { name: 'Peso Super Pena', limit: 'De 62kg até 66kg' },
    { name: 'Peso Leve', limit: 'De 67kg até 71kg' },
    { name: 'Peso Super Leve', limit: 'De 72kg até 76kg' },
    { name: 'Peso Meio Médio Ligeiro', limit: 'De 77kg até 81kg' },
    { name: 'Peso Médio', limit: 'De 82kg até 86kg' },
    { name: 'Peso Super Médio', limit: 'De 87kg até 91kg' },
    { name: 'Peso Meio Pesado', limit: 'De 92kg até 96kg' },
    { name: 'Peso Pesado', limit: 'De 97kg até 101kg' },
    { name: 'Peso Super Pesado', limit: 'acima de 101kg' }
  ];

  requiredDocs = [
    {
      icon: '📄',
      title: 'Autorização de Imagem',
      description: 'Autorização para veiculação de imagens e som de voz próprio punho'
    },
    {
      icon: '🏥',
      title: 'Atestado Médico',
      description: 'Atestado médico apto para atividade física do aluno participante'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Autorização dos Pais',
      description: 'Autorização dos pais para menores de 18 anos'
    },
    {
      icon: '🆔',
      title: 'Documento Oficial',
      description: 'RG, CNH, ou Registro Profissional (CREA, CREF, OAB, etc.)'
    }
  ];

  equipment = [
    {
      icon: '🛡️',
      name: 'Coquilha',
      description: 'Obrigatório para proteção'
    },
    {
      icon: '🦷',
      name: 'Protetor Bucal',
      description: 'Proteção dental obrigatória'
    },
    {
      icon: '🤲',
      name: 'Bandagem',
      description: 'Para proteção das mãos'
    },
    {
      icon: '👕',
      name: 'Shorts e Camiseta',
      description: 'Cores dos corners (vermelho e azul)'
    },
    {
      icon: '🥊',
      name: 'Luvas 18 oz MKS',
      description: 'Fornecidas pelo evento'
    },
    {
      icon: '⛑️',
      name: 'Capacete',
      description: 'Fornecido pelo evento'
    }
  ];

  mainSponsors = [
    {
      name: 'Academia Cornerman',
      logo: 'assets/sponsors/cornerman-logo.png',
      description: 'Local oficial do campeonato e principal apoiador'
    }
  ];

  regularSponsors = [
    {
      name: 'MKS Fight',
      logo: 'assets/sponsors/mks-logo.png',
      description: 'Fornecedor oficial de equipamentos'
    },
    {
      name: 'Sports Nutrition',
      logo: 'assets/sponsors/nutrition-logo.png',
      description: 'Suplementos e nutrição esportiva'
    },
    {
      name: 'Fight Wear',
      logo: 'assets/sponsors/fightwear-logo.png',
      description: 'Vestuário esportivo oficial'
    }
  ];

  technicalSponsors = [
    {
      name: 'Dr. Silva - Medicina Esportiva',
      logo: 'assets/sponsors/medic-logo.png',
      description: 'Apoio médico especializado'
    },
    {
      name: 'Fisio & Performance',
      logo: 'assets/sponsors/fisio-logo.png',
      description: 'Fisioterapia e reabilitação'
    }
  ];

  register() {
    window.open('https://operador-academia-hml.facilitasoft.com.br/evento/0b9b3ff5-1412-4127-9352-acd0ce0bc027', '_blank');
  }
}