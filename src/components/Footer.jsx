import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-pattern"></div>
      <div className="footer-glow"></div>
      
      <div className="footer-body">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/"><img src="/nexl_logo.jpeg" alt="NEXL" className="footer-logo" /></Link>
              <p>Newline Express Logistics — Your trusted global freight partner from Chennai to the world. IATA · FIATA · FFFAI Certified.</p>
              <div className="footer-socials">
                <a href="#" aria-label="LinkedIn">in</a>
                <a href="#" aria-label="Twitter">𝕏</a>
                <a href="#" aria-label="Facebook">f</a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Services</h4>
              <Link to="/services/sea-freight">Sea Freight</Link>
              <Link to="/services/air-freight">Air Freight</Link>
              <Link to="/services/lcl-consolidation">LCL Consolidation</Link>
              <Link to="/services/customs-clearance">Customs Clearance</Link>
              <Link to="/services/door-to-door">Door-to-Door</Link>
              <Link to="/services/project-cargo">Project Cargo</Link>
              <Link to="/services/domestic-coastal">Domestic & Coastal</Link>
            </div>

            <div className="footer-col">
              <h4>Industries</h4>
              <Link to="/industries/automotive">Automotive</Link>
              <Link to="/industries/pharmaceuticals">Pharmaceuticals</Link>
              <Link to="/industries/oil-gas">Oil & Gas</Link>
              <Link to="/industries/retail-ecommerce">Retail & E-commerce</Link>
              <Link to="/industries/engineering">Engineering</Link>
              <Link to="/industries/chemicals">Chemicals</Link>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <Link to="/about">About NEXL</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/get-quote">Get a Quote</Link>
              <h4 style={{ marginTop: 24 }}>Contact</h4>
              <a href="tel:+919884886797">+91 98848 86797</a>
              <a href="mailto:info@nexllogistics.com">info@nexllogistics.com</a>
              <p style={{ color: 'var(--blue-200)', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>
                134 Thambu Chetty Street,<br />
                George Town, Chennai – 600001
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Newline Express Logistics (NEXL). All rights reserved.</p>
          <p>Proprietor: Mohammed Idhirish</p>
        </div>
      </div>
    </footer>
  )
}
