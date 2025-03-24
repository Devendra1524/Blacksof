import { useState } from "react";
import "./header.css";
import headerImg from "../../asset/image/Supreme_logos.png"
import linkedinIcon from "../../asset/image/bxl-linkedin.svg.png";
import translateIcon from "../../asset/image/Frame493.png";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="header">
      <div className="container">
        <a href="/" className="logo">
          <img src={headerImg} alt="Logo" />
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="/contact" className="contact-btn">
            Contact Us
          </a></li>
          <li><a
            href="https://www.linkedin.com/company/supreme-group-company/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-btn"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a></li>
          <li> <button className="translate-btn">
            <img src={translateIcon} alt="Translate" />
          </button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;