import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './About.css'

const team = [
  { name: 'Mohammed Idhirish', role: 'Proprietor & Managing Director', icon: '👔' },
  { name: 'Operations Team', role: 'Freight & Documentation Experts', icon: '🗂️' },
  { name: 'CHA Division', role: 'Licensed Customs House Agents', icon: '🏛️' },
  { name: 'Customer Success', role: '24/7 Support & Account Management', icon: '🤝' },
]

const certifications = [
  { name: 'IATA', full: 'International Air Transport Association', icon: '✈️' },
  { name: 'FIATA', full: 'International Federation of Freight Forwarders', icon: '🌐' },
  { name: 'FFFAI', full: 'Federation of Freight Forwarders Associations in India', icon: '🇮🇳' },
  { name: 'Licensed CHA', full: 'Customs House Agent — In-house Licensed', icon: '📜' },
]

export default function About() {
  return (
    <div>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="sep">/</span> About Us
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About <span>NEXL</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Chennai's premier freight forwarder, connecting global trade with precision and trust.
          </motion.p>
        </div>
      </div>

      {/* Who We Are */}
      <section className="about-intro">
        <div className="container about-intro-grid">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-tag">Who We Are</p>
            <h2 className="section-title">Newline Express <span>Logistics</span></h2>
            <p>Newline Express Logistics (NEXL) is a premier logistics provider headquartered at George Town, Chennai. We offer seamless cargo movement across the globe, with deep expertise in sea freight, air freight, and customs clearance.</p>
            <p style={{ marginTop: 16 }}>Since our founding, NEXL has managed thousands of shipments across 80+ countries, building a reputation for transparency, precision, and reliable execution. Our licensed in-house CHA team ensures every customs procedure is handled without delay.</p>
            <div style={{ marginTop: 32 }}>
              <Link to="/get-quote" className="btn-primary"><span>Get a Quote</span></Link>
            </div>
          </motion.div>
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="about-img-wrap">
              <img src="/nexl_logo.jpeg" alt="NEXL" />
            </div>
            <div className="about-stat-chips">
              <div className="chip"><strong>150+</strong> Ports</div>
              <div className="chip"><strong>80+</strong> Countries</div>
              <div className="chip"><strong>24/7</strong> Support</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certs-section">
        <div className="container">
          <div className="section-center">
            <p className="section-tag">Trusted & Accredited</p>
            <h2 className="section-title">Our <span>Certifications</span></h2>
          </div>
          <div className="certs-grid">
            {certifications.map((c, i) => (
              <motion.div
                key={c.name}
                className="cert-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="cert-icon">{c.icon}</span>
                <strong>{c.name}</strong>
                <p>{c.full}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mv-section">
        <div className="container mv-grid">
          <motion.div className="mv-card"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="mv-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>To provide seamless, transparent, and cost-effective logistics solutions that empower businesses to thrive in global trade — with precision at every step of the supply chain.</p>
          </motion.div>
          <motion.div className="mv-card"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <div className="mv-icon">🌟</div>
            <h3>Our Vision</h3>
            <p>To be India's most trusted freight forwarding partner — known for unmatched expertise, cutting-edge technology, and a customer-first approach that spans every corner of the globe.</p>
          </motion.div>
          <motion.div className="mv-card"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <div className="mv-icon">💎</div>
            <h3>Our Values</h3>
            <p>Transparency, precision, reliability, and innovation. We believe that every shipment represents a promise — and we deliver on that promise, every time.</p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="container">
          <div className="section-center">
            <p className="section-tag">The People</p>
            <h2 className="section-title">Our <span>Team</span></h2>
          </div>
          <div className="team-grid">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                className="team-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="team-avatar">{m.icon}</div>
                <h4>{m.name}</h4>
                <p>{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
