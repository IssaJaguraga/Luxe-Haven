import React from 'react'

const Contact = () => {
  return (
    <>
      {/* Top header */}
      <header className="header-area">
        <div className="top-header-area">
          <div className="mail">
            <a href="mailto:contact@luxhaven.com">contact@luxhaven.com</a>
          </div>
          <div className="phone-container">
            <div className="phone-call">
              <img src="/images/phone-call.png" alt="Icône téléphone" />
            </div>
            <div className="phone-number">
              <a href="tel:+33145678221">+33 1 45 67 82 21</a>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main>
        <div className="container maintenance-message" style={{
          maxWidth: '600px',
          margin: '40px auto',
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          color: '#333'
        }}>
          <h1 style={{ color: '#e74c3c', marginBottom: '20px' }}>🚧 Site en Maintenance 🚧</h1>
          <p>Nous sommes actuellement en train de mettre à jour notre site pour améliorer votre expérience. Pendant cette période, certaines fonctionnalités peuvent ne pas être disponibles.</p>
          <p>Nous faisons tout notre possible pour terminer les travaux rapidement et vous remercions de votre patience et de votre compréhension.</p>
          <p><strong>Veuillez revenir plus tard pour accéder à notre site.</strong></p>
          <div className="contact" style={{ marginTop: '20px', fontSize: '1em' }}>
            <p>Pour toute question urgente, n'hésitez pas à nous contacter à <a href="mailto:contact@luxhaven.com">contact@luxhaven.com</a></p>
          </div>
          <p>Merci de votre compréhension !</p>
          <p>L'équipe <strong>LuxHaven</strong></p>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-newsletter">
          <h4>Abonnez-vous à notre Newsletter</h4>
          <p>Recevez les dernières nouvelles et mises à jour directement dans votre boîte de réception.</p>
          <form>
            <input type="email" placeholder="Votre email" required />
            <button type="submit">S'abonner</button>
          </form>
        </div>
        <div className="footer-container">
          <div className="footer-column">
            <h4>Contactez-nous</h4>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> 123 Rue Principale, Paris</li>
              <li><i className="fas fa-phone"></i> +33 1 23 45 67 89</li>
              <li><i className="fas fa-envelope"></i> info@exemple.com</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Liens Rapides</h4>
            <ul>
              <li><a href="/">Accueil</a></li>
              <li><a href="/about">À propos</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Nos Services</h4>
            <ul>
              <li><a href="/consultation">Consultation</a></li>
              <li><a href="/gestion-projet">Gestion de Projet</a></li>
              <li><a href="/developpement-web">Développement Web</a></li>
              <li><a href="/marketing">Marketing</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Suivez-nous</h4>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 VotreEntreprise. Tous droits réservés.</p>
        </div>
      </footer>
    </>
  )
}

export default Contact
