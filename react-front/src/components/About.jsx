import React from 'react';

const About = () => {
  return (
    <>
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

      <div style={{
        minHeight: '100vh',
        backgroundColor: '#333',
        display: 'flex',
        justifyContent: 'center',
        padding: '40px 20px',
      }}>
        <div style={{
          maxWidth: '1100px',
          backgroundColor: '#f5f5f5',  // bloc clair central
          borderRadius: '8px',
          boxShadow: '0 0 20px rgba(0,0,0,0.3)',
          padding: '50px 30px',
          color: '#222',
          width: '100%',
        }}>

          {/* Ton contenu complet ici */}

          {/* Héro */}
          <section style={{
            background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/images/luxury-texture.jpg) center/cover no-repeat',
            color: 'white',
            padding: '60px 20px',
            borderRadius: '8px',
            textAlign: 'center',
            borderBottom: '4px solid #d4af37'
          }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
              À propos de <span style={{ color: '#d4af37' }}>LuxHaven</span>
            </h1>
            <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
              L’immobilier de prestige repensé pour une nouvelle génération d’esthètes et d’investisseurs.
            </p>
          </section>

          {/* Histoire */}
          <section style={{ padding: '50px 20px', marginBottom: '40px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Notre histoire</h2>
            <p>
              Fondée en 2016 à Paris, <strong>LuxHaven</strong> est née d’un constat simple : le marché de l’immobilier de prestige méritait une
              nouvelle approche, à la fois humaine, technologique et résolument esthétique. En combinant la rigueur d’une expertise terrain avec une
              sensibilité aux codes du luxe, nous avons su nous imposer comme une référence dans l’immobilier haut de gamme en France et à l'international.
            </p>
            <p style={{ marginTop: '20px' }}>
              Notre agence a grandi avec une ambition : redonner à chaque projet immobilier la singularité qu’il mérite, qu’il s’agisse de résidences
              privées, de biens d’exception ou d’investissements patrimoniaux.
            </p>
          </section>

          {/* Mission */}
          <section style={{ backgroundColor: '#ffffff', padding: '20px 20px', marginBottom: '40px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Notre mission</h2>
            <p>
              Offrir une expérience sur mesure à chaque client. Chez <strong>LuxHaven</strong>, nous ne vendons pas des biens : nous accompagnons des
              projets de vie, des ambitions, des émotions. De la première visite à la signature chez le notaire, nous mettons tout en œuvre pour offrir
              un service irréprochable : réactivité, discrétion, transparence et efficacité.
            </p>
            <p style={{ marginTop: '20px' }}>
              Nous nous engageons à valoriser chaque bien à sa juste valeur, en tenant compte de son histoire, de son potentiel, et des aspirations
              de son futur acquéreur.
            </p>
          </section>

          {/* Équipe */}
          <section style={{ padding: '60px 20px', marginBottom: '40px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Notre équipe</h2>
            <p>
              Derrière chaque projet, une équipe engagée. Nos collaborateurs sont tous animés par une passion commune pour l’immobilier de prestige.
              Consultants immobiliers, experts du digital, architectes d’intérieur, photographes, juristes… Tous travaillent main dans la main pour garantir
              une qualité de service irréprochable.
            </p>
            <p style={{ marginTop: '20px' }}>
              Nous croyons à la force de l’humain et à la puissance du collectif. Notre accompagnement est global, mais toujours personnalisé.
            </p>
          </section>

          {/* Valeurs */}
          <section style={{ backgroundColor: '#fafafa', padding: '20px 20px', marginBottom: '40px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Nos valeurs</h2>
            <ul style={{ listStyle: 'none', paddingLeft: 0, lineHeight: '1.8' }}>
              <li>💼 <strong>Professionnalisme :</strong> Chaque détail compte. Nous travaillons avec méthode, exigence et discrétion.</li>
              <li>🤝 <strong>Confiance :</strong> Nous plaçons la relation client au cœur de notre métier, avec honnêteté et engagement.</li>
              <li>🌍 <strong>Ouverture :</strong> Notre réseau est international, mais notre approche reste humaine et locale.</li>
              <li>🏛️ <strong>Exclusivité :</strong> Nous sélectionnons les biens que nous représentons avec une extrême exigence.</li>
            </ul>
          </section>

          {/* Engagements */}
          <section style={{ padding: '60px 20px', marginBottom: '40px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Nos engagements</h2>
            <p>
              Que vous soyez vendeur, acquéreur ou investisseur, nous vous accompagnons avec la même rigueur. Chez LuxHaven, chaque bien fait l’objet
              d’une stratégie sur mesure : estimation, marketing, visites ciblées, mise en valeur, et suivi administratif.
            </p>
            <p style={{ marginTop: '20px' }}>
              Nous croyons en une nouvelle façon de faire de l’immobilier : plus humaine, plus élégante, et profondément alignée avec les exigences
              du marché haut de gamme.
            </p>
          </section>

          <section style={{
            backgroundColor: '#333',
            color: 'white',
            textAlign: 'center',
            padding: '80px 20px',
            borderRadius: '6px',
            marginTop: '40px'
          }}>
            <h2 style={{ fontSize: '2rem' }}>Vous souhaitez en savoir plus ?</h2>
            <p style={{ maxWidth: '700px', margin: '20px auto' }}>
              Parlons de votre projet. Nos experts sont à votre écoute pour une première consultation confidentielle.
            </p>
            <a href="/contact" style={{
              display: 'inline-block',
              backgroundColor: '#d4af37',
              color: '#000',
              padding: '12px 28px',
              borderRadius: '30px',
              fontWeight: 'bold',
              marginTop: '30px',
              textDecoration: 'none'
            }}>
              Contactez-nous
            </a>
          </section>

        </div>
      </div>
    </>
  );
};

export default About;