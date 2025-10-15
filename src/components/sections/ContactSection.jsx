import "./ContactSection.css";
import ContactForm from "../utilities/ContactForm.jsx";
import Spacer from "../ui/Spacer.jsx";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import atomiumImage from "../../assets/images/photos/atomium.webp";

export default function ContactSection() {
  return (
    <section id="contact" className="o-section contact-section">
      <Spacer size="lg" />

      <div className="o-container contact-foreground">
        {/* Title */}
        <h2 className="u-text-center">Get In Touch</h2>
        <Spacer size="lg" />
        <p className="contact-intro u-text-center text-lg-custom">
          Want to collaborate, or just say hello?
        </p>
        <Spacer size="lg" />

        {/* Panel */}
        <div className="contact-panel">
          {/* Left column */}
          <aside className="contact-aside">
            <div>
              <h3 className="contact-heading">Contact me</h3>

              <div className="contact-label">Email</div>
              <a
                href="mailto:info@eleanor-mears.com" target="_blank"
                className="contact-link contact-link--spaced"
              >
                info@eleanor-mears.com
              </a>

              <div className="contact-label">Phone</div>
              <a href="tel:+32467662544" className="contact-link">
                (+32) 467 66 25 44
              </a>
            </div>

            <div>
              <div className="contact-label contact-label--lg">Social media</div>
              <div className="contact-socials">
                <a
                  href="https://github.com/meiCiEn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-link"
                  aria-label="Visit Eleanor Mears’s GitHub profile"
                >
                  <FaGithub aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/elliemears/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-link"
                  aria-label="Visit Eleanor Mears’s LinkedIn profile"
                >
                  <FaLinkedin aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/ellie_makes_websites/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-link"
                  aria-label="Visit Eleanor Mears’s Instagram profile"
                >
                  <FaInstagram aria-hidden="true" />
                </a>
              </div>
            </div>
          </aside>

          {/* Right column */}
          <div className="contact-right contact-border">
            <div className="contact-form-wrap">
              <h3 className="contact-heading">Send me a message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Background image */}
      <div className="contact-bg" aria-hidden="true">
        <img src={atomiumImage} alt="" />
      </div>
    </section>
  );
}
