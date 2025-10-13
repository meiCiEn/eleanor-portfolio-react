import logo from "../../assets/images/logos/e-logo-light.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="footer">
      <div className="o-container">
        {/* Top grid */}
        <div className="o-grid o-grid--cols-1 o-grid--12-at-md o-grid--gap-10 u-items-start">
          {/* Logo (lg only) */}
          <div className="lg:u-col-span-2 u-hidden lg:u-block">
            <Link to="/#top">
              <img id="logo-img-footer" src={logo} alt="Eleanor Mears logo" />
            </Link>
          </div>

          {/* Sections */}
          <nav className="md:u-col-span-3 lg:u-col-span-2" aria-labelledby="footer-sections" aria-label="Footer: social sections">
            <h4 id="footer-sections" className="footer-heading">Sections</h4>
            <ul className="footer-links">
              <li><Link to="/#top">Home</Link></li>
              <li><Link to="/#about">About</Link></li>
              <li><Link to="/#projects">Projects</Link></li>
              <li><Link to="/#contact">Contact</Link></li>
            </ul>
          </nav>

          {/* Socials */}
          <div className="md:u-col-span-3 lg:u-col-span-2" aria-labelledby="footer-socials" aria-label="Footer: social profiles">
            <h4 id="footer-socials" className="footer-heading">Socials</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="https://github.com/meiCiEn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Eleanor Mears’s GitHub profile"
                >
                  <FaGithub size={18} aria-hidden="true" focusable="false" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/elliemears/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Eleanor Mears’s LinkedIn profile"
                >
                  <FaLinkedin size={18} aria-hidden="true" focusable="false" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ellie_makes_websites/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Eleanor Mears’s Instagram profile"
                >
                  <FaInstagram size={18} aria-hidden="true" focusable="false" /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider u-mt-12" aria-hidden="true" />

        {/* Bottom row */}
        <div className="u-mt-10 o-grid o-grid--cols-1 o-grid--12-at-md o-grid--gap-6 u-text-sm">
          <address className="u-not-italic md:u-col-span-4">
            <p className="footer-label">Email</p>
            <a href="mailto:info@eleanor-mears.com" className="footer-links o-flex o-flex--center sm:u-justify-start u-break-words">
              info@eleanor-mears.com
            </a>
          </address>

          <div className="md:u-col-span-4">
            <p className="footer-label">Phone</p>
            <a href="tel:+32467662544" className="footer-links o-flex o-flex--center sm:u-justify-start">
              (+32) 467 66 25 44
            </a>
          </div>

          <div className="md:u-col-span-4 md:u-text-right">
            <p className="o-flex o-flex--center sm:u-justify-end">© Eleanor Mears {year}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
