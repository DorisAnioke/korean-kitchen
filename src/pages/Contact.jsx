

// src/pages/Contact.jsx
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15841.295719795!2d7.512417!3d6.441421!2m3!1f0!2f0!3f0!3m2!111024!21768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjYnMjkuMSJOIDfCsDMwJzQOLjciRQ!5e0!3m2!1sen!2sus!4v1621435678901!5m2!1sen!2sus"
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