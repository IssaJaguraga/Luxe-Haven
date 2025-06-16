import React from 'react';

const Contact = () => {
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
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          boxShadow: '0 0 20px rgba(0,0,0,0.3)',
          padding: '50px 30px',
          color: '#222',
          width: '100%',
        }}>
          {/* Hero */}
          <section style={{
            background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/images/luxury-texture.jpg) center/cover no-repeat',
            color: 'white',
            padding: '60px 20px',
            borderRadius: '8px',
            textAlign: 'center',
            borderBottom: '4px solid #d4af37'
          }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
              Contactez <span style={{ color: '#d4af37' }}>LuxHaven</span>
            </h1>
            <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
              Nous sommes à votre disposition pour toute demande ou prise de rendez-vous.
            </p>
          </section>

          {/* Formulaire de contact */}
          <section style={{ padding: '50px 20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Formulaire de contact</h2>
            <form style={{ maxWidth: '700px', margin: '0 auto' }}>
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="name">Nom</label><br />
                <input type="text" id="name" name="name" required style={inputStyle} />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="email">Email</label><br />
                <input type="email" id="email" name="email" required style={inputStyle} />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="subject">Sujet</label><br />
                <input type="text" id="subject" name="subject" required style={inputStyle} />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="message">Message</label><br />
                <textarea id="message" name="message" rows="5" required style={textareaStyle}></textarea>
              </div>
              <div style={{ textAlign: 'center' }}>
                <button type="submit" style={buttonStyle}>Envoyer le message</button>
              </div>
            </form>
          </section>

          {/* Coordonnées */}
          <section style={{ padding: '30px 20px', backgroundColor: '#fafafa', borderRadius: '6px', marginTop: '30px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Nos coordonnées</h2>
            <ul style={{ listStyle: 'none', paddingLeft: 0, lineHeight: '2em', textAlign: 'center' }}>
              <li>📍 123 Rue Principale, Paris</li>
              <li>📞 +33 1 23 45 67 89</li>
              <li>📧 info@exemple.com</li>
            </ul>
          </section>

          {/* Newsletter */}
          <section style={{
            backgroundColor: '#333',
            color: 'white',
            textAlign: 'center',
            padding: '60px 20px',
            borderRadius: '6px',
            marginTop: '40px'
          }}>
            <h2 style={{ fontSize: '2rem' }}>Restez informé</h2>
            <p style={{ maxWidth: '700px', margin: '20px auto' }}>
              Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités.
            </p>
            <form style={{ marginTop: '30px' }}>
              <input type="email" placeholder="Votre email" required style={{
                padding: '12px',
                borderRadius: '30px 0 0 30px',
                border: 'none',
                width: '250px',
                color: '#000',
                backgroundColor: '#fff8e1'
              }} />
              <button type="submit" style={{
                padding: '12px 20px',
                borderRadius: '0 30px 30px 0',
                border: 'none',
                backgroundColor: '#d4af37',
                color: '#000',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
                S'abonner
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

// Styles pour les champs
const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  backgroundColor: '#fff8e1',
  color: '#000',
  zIndex: 1,
  position: 'relative'
};

const textareaStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  resize: 'vertical',
  backgroundColor: '#fff8e1',
  color: '#000',
  zIndex: 1,
  position: 'relative'
};

const buttonStyle = {
  backgroundColor: '#d4af37',
  color: '#000',
  padding: '12px 24px',
  border: 'none',
  borderRadius: '30px',
  fontWeight: 'bold',
  fontSize: '1rem',
  cursor: 'pointer'
};

export default Contact;