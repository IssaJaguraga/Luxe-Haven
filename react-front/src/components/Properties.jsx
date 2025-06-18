import React from 'react'

const Properties = () => {
  // Exemple de données pour les cartes propriétés
  const propertiesData = [
    {
      id: 1,
      title: "Title card properties",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda cupiditate laboriosam officiis laudantium quo optio aspernatur omnis magnam, culpa voluptatibus porro blanditiis at rerum placeat quaerat! Nostrum aliquid exercitationem odit.",
      image: "/images/image-nav.jpg",
    },
    {
      id: 2,
      title: "Title card properties",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda cupiditate laboriosam officiis laudantium quo optio aspernatur omnis magnam, culpa voluptatibus porro blanditiis at rerum placeat quaerat! Nostrum aliquid exercitationem odit.",
      image: "/images/image-nav.jpg",
    },
    {
      id: 3,
      title: "Title card properties",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda cupiditate laboriosam officiis laudantium quo optio aspernatur omnis magnam, culpa voluptatibus porro blanditiis at rerum placeat quaerat! Nostrum aliquid exercitationem odit.",
      image: "/images/image-nav.jpg",
    },
    {
      id: 4,
      title: "Title card properties",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda cupiditate laboriosam officiis laudantium quo optio aspernatur omnis magnam, culpa voluptatibus porro blanditiis at rerum placeat quaerat! Nostrum aliquid exercitationem odit.",
      image: "/images/image-nav.jpg",
    },
  ]

  return (
    <>
      {/* Header */}
      <header className="header-area">
        <div className="top-header-area">
          <div className="mail">
            <a href="mailto:contact@luxhaven.com">contact@luxhaven.com</a>
          </div>
          <div className="phone-container">
            <div className="phone-call">
              <img src="/images/phone-call.png" alt="Phone Call" />
            </div>
            <div className="phone-number">
              <a href="tel:+33145678221">+33 1 45 67 82 21</a>
            </div>
          </div>
        </div>
      </header>

      {/* Propriétés */}
      <div className="cards-properties" style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
        {propertiesData.map(({ id, title, description, image }) => (
          <div className="card-propertie" key={id} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '20px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}>
            <img src={image} alt={title} style={{ width: '100%', height: 'auto', display: 'block' }} />
            <div className="content" style={{ padding: '15px' }}>
              <h4 className="titleCardProperties" style={{ marginBottom: '10px' }}>{title}</h4>
              <div className="Body-PropertyCard" style={{ color: '#555' }}>
                <p>{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

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

export default Properties
