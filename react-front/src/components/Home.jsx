import React from 'react';

const Home = () => {
  return (
    <>
      <div className="main-content">

        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/images/200912673.jpg" className="d-block w-100" alt="Première image du carousel" />
              <div className="carousel-caption">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/images/200912713.jpg" className="d-block w-100" alt="Deuxième image du carousel" />
              <div className="carousel-caption">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/images/200912715.jpg" className="d-block w-100" alt="Troisième image du carousel" />
              <div className="carousel-caption">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="cards">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="card" key={index}>
              <img src="/images/image1.jpg" alt={`Image exemple ${index + 1}`} />
              <h5 className="card-Title">Card Title</h5>
              <div className="card-Body">
                <p>Premier paragraphe. Ceci est un exemple de texte qui sera séparé par une ligne horizontale.</p>
                <hr />
                <p>Deuxième paragraphe. Ceci est un autre texte qui suit le premier, séparé par la ligne.</p>
              </div>
            </div>
          ))}
        </div>
      </div>

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
              <li><a href="#">Accueil</a></li>
              <li><a href="#">À propos</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Nos Services</h4>
            <ul>
              <li><a href="#">Consultation</a></li>
              <li><a href="#">Gestion de Projet</a></li>
              <li><a href="#">Développement Web</a></li>
              <li><a href="#">Marketing</a></li>
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
  );
};

export default Home;
