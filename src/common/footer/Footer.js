import React from "react";
import "./footer.css"; 
import headerImg from "../../asset/image/Supreme_logos.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <a href="/">
            <img
              src={headerImg}
              alt="Supreme logo"
              title="logo"
            />
          </a>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          {/* Applications */}
          <div className="footer-column">
            <h4>Applications</h4>
            <ul>
              <li><a href="/applications/apparel">Apparel</a></li>
              <li><a href="/applications/automotive">Automotive</a></li>
              <li><a href="/applications/filtration">Filtration</a></li>
              <li><a href="/applications/customised-nonwoven">Customised Nonwoven</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="/who-we-are">Who We Are</a></li>
              <li><a href="/global-competency">Global Competency</a></li>
              <li><a href="/innovation">Innovation</a></li>
              <li><a href="/esg-impact">ESG Impact</a></li>
            </ul>
          </div>

          {/* More */}
          <div className="footer-column">
            <h4>More</h4>
            <ul>
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="footer-column">
            <h4>Follow Us</h4>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/company/supreme-group-company/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>©2024. All Rights Reserved.</p>
          <p>Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
