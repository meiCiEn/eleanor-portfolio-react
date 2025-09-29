import "./ContactSection.css";
import ContactForm from "../utilities/ContactForm.jsx";
import Spacer from "../ui/Spacer.jsx";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import atomiumImage from "../../assets/images/atomium.jpg";

export default function ContactSection() {
  return (
    <section id="contact" className="section contact-section relative">
      <Spacer size="lg" />
      <div className="container relative z-10">
        {/* Title */}
        <h2 className="text-center">Get In Touch</h2>
        <Spacer size="lg" />
        <p className="mb-10 text-center text-lg-custom">
          Want to collaborate, or just say hello?
        </p>
        <Spacer size="lg" />

        {/* Panel */}
        <div className="contact-panel grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-12 p-6 md:p-10 relative z-10">
          {/* Left column */}
          <aside className="space-y-8">
            <div>
              <h3 className="contact-heading pb-10 text-center md:text-left">Contact me</h3>

              <div className="contact-label mb-2">Email</div>
              <a href="mailto:info@eleanor-mears.com" className="contact-link block mb-6">
                info@eleanor-mears.com
              </a>

              <div className="contact-label mb-2">Phone</div>
              <a href="tel:+32467662544" className="contact-link block">
                (+32) 467 66 25 44
              </a>
            </div>

            <div>
              <div className="contact-label mb-3">Social media</div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/meiCiEn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-link"
                  aria-label="Visit Eleanor Mears’s GitHub profile"
                >
                  <FaGithub className="text-lg" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/elliemears/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-link"
                  aria-label="Visit Eleanor Mears’s LinkedIn profile"
                >
                  <FaLinkedin className="text-lg" aria-hidden="true" />
                </a>
              </div>
            </div>
          </aside>

          {/* Right column */}
          <div className="border-t md:border-t-0 md:border-l contact-border">
            <div className="md:pl-10 pt-6 md:pt-0">
              <h3 className="contact-heading pb-10 text-center md:text-left">Send me a message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Background image */}
      <div className="contact-bg">
        <img src={atomiumImage} alt="Atomium in Brussels" />
      </div>
    </section>
  );
}
