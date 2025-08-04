import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <section id="contact" class="contact">
      <div class="container">
        <div class="contact-content">
          <div class="contact-info">
            <h2>ENTRE EM <span>CONTATO</span></h2>
            <p>Pronto para começar sua jornada? Entre em contato conosco e agende sua aula experimental gratuita!</p>
            
            <div class="info-items">
              <div class="info-item">
                <div class="info-icon">📍</div>
                <div>
                  <h4>Endereço</h4>
                  <p>Rua dos Campeões, 123<br>Centro, São Paulo - SP</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">📞</div>
                <div>
                  <h4>Telefone</h4>
                  <p>(11) 9999-9999<br>(11) 8888-8888</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">⏰</div>
                <div>
                  <h4>Horário</h4>
                  <p>Segunda a Sexta: 6h às 22h<br>Sábados: 8h às 18h</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">✉️</div>
                <div>
                  <h4>Email</h4>
                  <p>contato&#64;fightclub.com.br<br>atendimento&#64;fightclub.com.br</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="contact-form">
            <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <h3>Agende sua Aula Gratuita</h3>
              
              <div class="form-group">
                <input 
                  type="text" 
                  [(ngModel)]="formData.name" 
                  name="name" 
                  placeholder="Seu nome completo" 
                  required>
              </div>
              
              <div class="form-group">
                <input 
                  type="email" 
                  [(ngModel)]="formData.email" 
                  name="email" 
                  placeholder="Seu melhor email" 
                  required>
              </div>
              
              <div class="form-group">
                <input 
                  type="tel" 
                  [(ngModel)]="formData.phone" 
                  name="phone" 
                  placeholder="Seu telefone/WhatsApp" 
                  required>
              </div>
              
              <div class="form-group">
                <select [(ngModel)]="formData.interest" name="interest" required>
                  <option value="">Qual modalidade te interessa?</option>
                  <option value="boxe-tradicional">Boxe Tradicional</option>
                  <option value="boxe-fitness">Boxe Fitness</option>
                  <option value="muay-thai">Muay Thai</option>
                  <option value="boxe-kids">Boxe Kids</option>
                  <option value="competitivo">Boxe Competitivo</option>
                </select>
              </div>
              
              <div class="form-group">
                <textarea 
                  [(ngModel)]="formData.message" 
                  name="message" 
                  placeholder="Conte-nos sobre seus objetivos ou dúvidas" 
                  rows="4">
                </textarea>
              </div>
              
              <button type="submit" class="submit-btn" [disabled]="!contactForm.form.valid">
                Agendar Aula Gratuita
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      padding: 6rem 0;
      background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: start;
    }

    .contact-info h2 {
      font-size: 2.5rem;
      font-weight: 900;
      margin-bottom: 1.5rem;
      color: #1f2937;
      line-height: 1.2;
    }

    .contact-info span {
      color: #dc2626;
    }

    .contact-info > p {
      font-size: 1.2rem;
      color: #6b7280;
      margin-bottom: 3rem;
      line-height: 1.6;
    }

    .info-items {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .info-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
    }

    .info-icon {
      font-size: 1.5rem;
      width: 50px;
      height: 50px;
      background: linear-gradient(45deg, #dc2626, #fbbf24);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .info-item h4 {
      font-size: 1.1rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 0.5rem;
    }

    .info-item p {
      color: #6b7280;
      line-height: 1.5;
      margin: 0;
    }

    .contact-form {
      background: white;
      padding: 3rem;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    .contact-form h3 {
      font-size: 1.8rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 2rem;
      text-align: center;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: 1rem;
      border: 2px solid #e5e7eb;
      border-radius: 12px;
      font-size: 1rem;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
      background: #f9fafb;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #dc2626;
      box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
      background: white;
    }

    .form-group textarea {
      resize: vertical;
      min-height: 100px;
    }

    .submit-btn {
      width: 100%;
      background: linear-gradient(45deg, #dc2626, #b91c1c);
      color: white;
      border: none;
      padding: 1.2rem;
      border-radius: 12px;
      font-weight: 600;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .submit-btn:hover:not(:disabled) {
      background: linear-gradient(45deg, #b91c1c, #dc2626);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(220, 38, 38, 0.3);
    }

    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }

    @media (max-width: 768px) {
      .contact {
        padding: 4rem 0;
      }

      .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .contact-form {
        padding: 2rem;
      }

      .contact-info h2 {
        font-size: 2rem;
        text-align: center;
      }
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Aqui você implementaria o envio do formulário
    alert('Obrigado pelo contato! Entraremos em contato em breve.');
    
    // Reset form
    this.formData = {
      name: '',
      email: '',
      phone: '',
      interest: '',
      message: ''
    };
  }
}