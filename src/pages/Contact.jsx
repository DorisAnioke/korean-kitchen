// src/pages/Contact.jsx
function Contact() {
  return (
    <div className="contact">
      <h2>Contact Seri's Korean Delight 🍜</h2>
      <div className="contact-container">
        <div className="contact-section">
          <h3>Location</h3>
          <p>
            <span className="contact-icon">📍</span>
            Enugu, Nigeria
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.776879169496!2d126.97514731531675!3d37.
            566535179797395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2e7d6b0c54f%3A0x7b37d81b6e8b8c2!
            2sEnugu%2C%20South%20Korea!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title=" Seri's Korean Delight Location"
          ></iframe>
        </div>
        <div className="contact-section">
          <h3>Contact Details</h3>
          <p>
            <span className="contact-icon">☎️</span>
            Phone:  +234-814-309-2486
          </p>
          <p>Email: Seriskoreandelight@gmail.com</p>
        </div>
        <div className="contact-section">
          <h3>Follow Us</h3>
          <p>
            <span className="social-icon">📘</span>
            <a href="https://facebook.com/SerisKoreanDelight" target="_blank" rel="noopener noreferrer">Facebook:  @SerisKoreanDelight</a>
          </p>
          <p>
            <span className="social-icon">📱</span>
            <a href="https://wa.me/2348143092486" target="_blank" rel="noopener noreferrer">WhatsApp:  +234-814-309-2486</a>
          </p>
          <p>
            <span className="social-icon">📸</span>
            <a href="https://instagram.com/KoreanDelightEats" target="_blank" rel="noopener noreferrer">Instagram: @SerisKoreanDelightEats</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;