import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Services.css'

const services = [
  {
    icon: '🚢', title: 'Sea Freight', path: '/services/sea-freight',
    desc: 'FCL & LCL ocean freight services connecting to over 150 ports worldwide. Competitive rates with major shipping lines.',
    features: ['FCL & LCL Options', '150+ Ports', 'Real-time Tracking', 'Full Documentation'],
    color: '#1a40b8',
  },
  {
    icon: '✈️', title: 'Air Freight', path: '/services/air-freight',
    desc: 'Express and charter solutions for time-critical shipments with global airline partnerships.',
    features: ['Express Delivery', 'Charter Services', 'Perishable Cargo', 'Dangerous Goods'],
    color: '#335cda',
  },
  {
    icon: '📦', title: 'LCL Consolidation', path: '/services/lcl-consolidation',
    desc: 'Cost-effective weekly groupage shipments for smaller cargo volumes with competitive rates.',
    features: ['Weekly Departures', 'Cost Efficient', 'Flexible Volumes', 'Hub Network'],
    color: '#002496',
  },
  {
    icon: '🗂️', title: 'Customs Clearance', path: '/services/customs-clearance',
    desc: 'Expert CHA services including IEC, Bill of Entry (BOE), and duty drawback handling.',
    features: ['Licensed CHA', 'BOE Filing', 'Duty Drawback', 'IEC Support'],
    color: '#e8620a',
  },
  {
    icon: '🚚', title: 'Door-to-Door', path: '/services/door-to-door',
    desc: 'Comprehensive management from initial pick-up to final delivery, end-to-end.',
    features: ['Pick-up & Delivery', 'Last-Mile Service', 'Warehousing', 'Full Visibility'],
    color: '#1a40b8',
  },
  {
    icon: '🏗️', title: 'Project Cargo', path: '/services/project-cargo',
    desc: 'Specialists in ODC, heavy lift, and out-of-gauge cargo requiring specialized handling.',
    features: ['ODC Cargo', 'Heavy Lift', 'Out-of-Gauge', 'Route Survey'],
    color: '#335cda',
  },
  {
    icon: '🛳️', title: 'Domestic & Coastal', path: '/services/domestic-coastal',
    desc: 'Pan-India surface and coastal shipping at competitive rates across all major ports.',
    features: ['Pan-India Network', 'Coastal Shipping', 'Surface Transport', 'Competitive Rates'],
    color: '#002496',
  },
]

export default function Services() {
  return (
    <div className="services-page">

      {/* ── Page Hero ── */}
      <div className="page-hero services-hero">
        <div className="services-hero-orb sv-orb1" />
        <div className="services-hero-orb sv-orb2" />
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="sep">/</span> Services
          </div>
          <motion.div
            className="sv-hero-tag"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="sv-hero-dot" />
            7 Specialist Services
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our <span>Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            End-to-end freight solutions built for the demands of modern global trade — from Chennai to the world.
          </motion.p>
        </div>
      </div>

      {/* ── Services Grid ── */}
      <section className="sv-grid-section">
        <div className="container">
          <div className="sv-grid">
            {services.map((s, i) => (
              <motion.div
                key={s.path}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <Link to={s.path} className="sv-card">
                  <div className="sv-card-top">
                    <span className="sv-icon">{s.icon}</span>
                    <span className="sv-arrow-icon">→</span>
                  </div>
                  <h3 className="sv-title">{s.title}</h3>
                  <p className="sv-desc">{s.desc}</p>
                  <div className="sv-features">
                    {s.features.map(f => (
                      <span key={f} className="sv-feature-tag">{f}</span>
                    ))}
                  </div>
                  <div className="sv-learn">
                    <span>Learn More</span>
                    <span className="sv-learn-arrow">→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="sv-cta">
        <div className="sv-cta-bg" />
        <div className="container sv-cta-inner">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-tag" style={{ justifyContent: 'center' }}>Ready to Ship?</p>
            <h2 className="section-title sv-cta-title">Get a Competitive Quote <span style={{ color: 'var(--orange-light)' }}>in 4 Hours</span></h2>
            <p className="sv-cta-sub">Our logistics experts are available 24/7 to handle any freight requirement.</p>
            <div className="sv-cta-actions">
              <Link to="/get-quote" className="btn-white">Get a Free Quote</Link>
              <a href="tel:+919884886797" className="btn-outline-white">📞 +91 98848 86797</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
