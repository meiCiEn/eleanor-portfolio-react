import logo from "../../assets/images/logos/e-logo-light.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer role="contentinfo" className="footer">
            {/* Top grid */}
            <div className="container py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
                    {/* Logo */}
                    <div className="lg:col-span-2 hidden lg:block">
                        <Link to="/#top"><img id="logo-img-footer"
                            src={logo}
                            alt="Eleanor Mears logo"
                            className="w-14 h-14 object-contain"
                        /></Link>
                    </div>

                    {/* Sections */}
                    <nav className="md:col-span-3 lg:col-span-2" aria-labelledby="footer-sections" aria-label="Footer: social sections">
                        <h4 id="footer-sections" className="footer-heading">
                            Sections
                        </h4>
                        <ul className="footer-links">
                            <li><Link to="/#top">Home</Link></li>
                            <li><Link to="/#about">About</Link></li>
                            <li><Link to="/#projects">Projects</Link></li>
                            <li><Link to="/#contact">Contact</Link></li>
                        </ul>
                    </nav>

                    {/* Socials */}
                    <div className="md:col-span-3 lg:col-span-2" aria-labelledby="footer-socials" aria-label="Footer: social profiles">
                        <h4 id="footer-socials" className="footer-heading">Socials</h4>
                        <ul className="space-y-4 footer-links">
                            <li>
                                <a
                                    href="https://github.com/meiCiEn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3"
                                    aria-label="Visit Eleanor Mears’s GitHub profile"
                                >
                                    <FaGithub className="text-lg" aria-hidden="true" focusable="false" /> GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/elliemears/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3"
                                    aria-label="Visit Eleanor Mears’s LinkedIn profile"
                                >
                                    <FaLinkedin className="text-lg" aria-hidden="true" focusable="false" /> LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="footer-divider mt-12" aria-hidden="true" />

                {/* Bottom row */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-6 text-sm">
                    <address className="not-italic md:col-span-4">
                        <p className="footer-label hidden sm:block mb-1">Email</p>
                        <a
                            href="mailto:info@eleanor-mears.com"
                            className="footer-links flex justify-center sm:justify-start break-words"
                        >
                            info@eleanor-mears.com
                        </a>
                    </address>

                    <div className="md:col-span-4">
                        <p className="hidden footer-label sm:block mb-1">Phone</p>
                        <a href="tel:+32467662544" className="footer-links flex justify-center sm:justify-start">
                            (+32) 467 66 25 44
                        </a>
                    </div>

                    <div className="md:col-span-4 md:text-right">
                        <p className="footer-label hidden sm:block mb-1">Copyright</p>
                        <p className="flex justify-center sm:justify-end">© Eleanor Mears {year}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
