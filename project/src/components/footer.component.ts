import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="nav-brand">
              <p><strong>Realizações: </strong></p>
              <img width="90" height="90" src="assets/cba.png" alt="CBA Logo" class="logo" style="margin-right: 10px;"/>
              <img width="90" height="90" src="assets/tonyboxe.png" alt="CBA Logo" class="logo"/>
              <h3 class="brand-title mt-5">CBA</h3>
            </div>
            <p>Transformando vidas através do boxe há mais de 8 anos. Venha descobrir o campeão que existe em você!</p>
            <div class="social-links">
              <a href="#" class="social-link">📘</a>
              <a href="#" class="social-link">📷</a>
              <a href="#" class="social-link">📱</a>
              <a href="#" class="social-link">🐦</a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4>Modalidades</h4>
            <ul>
              <li><a href="#classes">Boxe Tradicional</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Academia</h4>
            <ul>
              <li><a href="#inscricao">Inscrever-se</a></li>
              <li><a href="#trainers">Apoiadores</a></li>
              <li><a href="#pricing">Categorias</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Contato</h4>
            <div class="contact-info">
              <ul>
                <li><a href="#inscricao">📞 (11) 9 4751-3175</a></li>
                <li><a href="#trainers">✉️ E-mail: tony.boxe&#64;hotmail.com</a></li>
              </ul>
            </div>
          </div>


        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2025 Todos os direitos reservados.</p>
          <div class="footer-links">
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
            <a href="#">Cancelamento</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #111827;
      color: white;
      padding: 4rem 0 2rem;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.5fr;
      gap: 3rem;
      margin-bottom: 3rem;
    }

    .footer-section h3 {
      font-size: 1.8rem;
      font-weight: 800;
      margin-bottom: 1rem;
      letter-spacing: 2px;
    }

    .footer-section span {
      color: #dc2626;
    }

    .footer-section h4 {
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      color: #dc2626;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .footer-section p {
      color: #d1d5db;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      width: 40px;
      height: 40px;
      background: rgba(220, 38, 38, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: all 0.3s ease;
      border: 1px solid rgba(220, 38, 38, 0.3);
    }

    .social-link:hover {
      background: #dc2626;
      transform: translateY(-2px);
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-section li {
      margin-bottom: 0.75rem;
    }

    .footer-section a {
      color: #d1d5db;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-section a:hover {
      color: #dc2626;
    }

    .contact-info p {
      margin-bottom: 1rem;
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
    }

    .footer-bottom {
      border-top: 1px solid rgba(220, 38, 38, 0.3);
      padding-top: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .footer-bottom p {
      color: #9ca3af;
      margin: 0;
    }

    .footer-links {
      display: flex;
      gap: 2rem;
    }

    .footer-links a {
      color: #9ca3af;
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }

    .footer-links a:hover {
      color: #dc2626;
    }

    @media (max-width: 1024px) {
      .footer-content {
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }
    }

    @media (max-width: 768px) {
      .footer {
        padding: 3rem 0 1.5rem;
      }

      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
      }

      .footer-bottom {
        flex-direction: column;
        text-align: center;
      }

      .footer-links {
        justify-content: center;
      }

      .social-links {
        justify-content: center;
      }
    }
  `]
})
export class FooterComponent { }