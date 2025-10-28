import React from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div id="contact" className={styles.root}>
      {/* Floating background circles */}
      <div className={styles.bgElement}></div>
      <div className={styles.bgElement}></div>
      <div className={styles.bgElement}></div>

      {/* Contact Form Section */}
      <div className={styles.contactFormWrapper}>
        <form className={styles.contactForm}>
          <h1 className={styles.heading}>Contact Us</h1>
          <p className={styles.subtitle}>
            We'd love to hear from you. Please fill out the form below.
          </p>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="name">Full Name</label>
            <input className={styles.input} type="text" id="name" placeholder="Enter your name" />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">Email Address</label>
            <input className={styles.input} type="email" id="email" placeholder="Enter your email" />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="subject">Subject</label>
            <select className={styles.select} id="subject">
              <option value="">Select an option</option>
              <option>General Inquiry</option>
              <option>Feedback</option>
              <option>Support</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="message">Message</label>
            <textarea
              className={styles.textarea}
              id="message"
              rows="5"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>
      </div>

      {/* Info Section */}
      <div className={styles.infoSection}>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>📍</div>
          <div className={styles.infoTitle}>Our Location</div>
          <div className={styles.infoText}>123 Innovation Street, Tech City</div>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>📞</div>
          <div className={styles.infoTitle}>Call Us</div>
          <div className={styles.infoText}>+91 98765 43210</div>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>✉️</div>
          <div className={styles.infoTitle}>Email</div>
          <div className={styles.infoText}>support@ignite2025.com</div>
        </div>
      </div>
    </div>
  );
}
