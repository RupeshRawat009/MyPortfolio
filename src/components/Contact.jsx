import '../styles/components/Contact.css';

export default function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-heading">
        <span className="heading-text">Contact</span>
      </h2>
      <div className="contact-content">
        <p className="contact-label">Email:</p>
        <a href="mailto:rupeshrawat133@gmail.com" className="contact-email">
          rupeshrawat133@gmail.com
        </a>
      </div>
    </section>
  );
}