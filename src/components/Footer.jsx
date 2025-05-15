// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Seri's Korean Delight 🍜</h3>
          <p>Authentic Korean cuisine delivered to your door.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            <span className="contact-icon">📍</span>
            Location: Enugu, Nigeria
          </p>
          <p>
            <span className="contact-icon">☎️</span>
            Phone: +234-814-309-2486
          </p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>
            <span className="social-icon">📘</span>
            <a href="https://facebook.com/Seriskoreandelight" target="_blank" rel="noopener noreferrer">Facebook:  @SerisKoreanDelight</a>
          </p>
          <p>
            <span className="social-icon">📱</span>
            <a href="https://wa.me/2348143092486" target="_blank" rel="noopener noreferrer">WhatsApp:  +234-814-309-2486</a>
          </p>
          <p>
            <span className="social-icon">📸</span>
            <a href="https://instagram.com/SerisKoreanDelight" target="_blank" rel="noopener noreferrer">Instagram: @SerisKoreanDelight</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;