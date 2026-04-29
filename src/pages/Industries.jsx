import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Industries.css'

const industries = [
  {
    icon: '🚗', title: 'Automotive', path: '/industries/automotive',
    desc: 'CKD/CBU vehicles and spare parts — JIT logistics for OEMs and dealers.',
    img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80',
    tag: 'JIT Logistics',
  },
  {
    icon: '💊', title: 'Pharmaceuticals', path: '/industries/pharmaceuticals',
    desc: 'GDP-compliant cold chain logistics for APIs, formulations, and medical devices.',
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    tag: 'Cold Chain',
  },
  {
    icon: '⚙️', title: 'Oil & Gas', path: '/industries/oil-gas',
    desc: 'Project cargo and DG freight for upstream and downstream energy operations.',
    img: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80',
    tag: 'DG Certified',
  },
  {
    icon: '🛒', title: 'Retail & E-commerce', path: '/industries/retail-ecommerce',
    desc: 'Fast, flexible cross-border freight for online retailers and marketplace sellers.',
    img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    tag: 'Express',
  },
  {
    icon: '🔧', title: 'Engineering', path: '/industries/engineering',
    desc: 'Heavy machinery, industrial equipment, and fabricated goods logistics.',
    img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    tag: 'ODC Capable',
  },
  {
    icon: '🧪', title: 'Chemicals', path: '/industries/chemicals',
    desc: 'IMDG-compliant handling for hazardous and specialty chemical shipments.',
    img: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=800&q=80',
    tag: 'IMDG Certified',
  },
]

export default function Industries() {
  return (
    <div className="industries-page">

      {/* ── Page Hero ── */}
      <div className="page-hero industries-hero">
        <div className="industries-hero-orb ih-orb1" />
        <div className="industries-hero-orb ih-orb2" />
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="sep">/</span> Industries
          </div>
          <motion.div
            className="ih-hero-tag"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="ih-hero-dot" />
            6 Industry Verticals
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Industries <span>We Serve</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            Specialized logistics and compliance expertise across six key sectors of global trade.
          </motion.p>
        </div>
      </div>

      {/* ── Industries Grid ── */}
      <section className="ih-grid-section">
        <div className="container">
          <div className="ih-grid">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.path}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.09 }}
              >
                <Link to={ind.path} className="ih-card">
                  <div className="ih-img-wrap">
                    <img src={ind.img} alt={ind.title} className="ih-img" />
                    <div className="ih-img-overlay" />
                    <span className="ih-tag">{ind.tag}</span>
                    <span className="ih-icon-overlay">{ind.icon}</span>
                  </div>
                  <div className="ih-card-body">
                    <h3 className="ih-title">{ind.title}</h3>
                    <p className="ih-desc">{ind.desc}</p>
                    <div className="ih-learn">
                      <span>Explore Solution</span>
                      <span className="ih-learn-arrow">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Custom CTA Band ── */}
      <section className="ih-custom-cta">
        <div className="container ih-custom-inner">
          <motion.div
            className="ih-custom-content"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-tag">Don't See Your Sector?</p>
            <h2 className="section-title">We Work Across <span>Many More</span></h2>
            <p className="ih-custom-sub">
              NEXL handles diverse cargo types across virtually every trade sector. Contact us for a tailored logistics solution built around your specific needs.
            </p>
          </motion.div>
          <motion.div
            className="ih-custom-actions"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/contact" className="btn-primary"><span>Contact Our Team</span></Link>
            <Link to="/get-quote" className="btn-outline">Get a Quote</Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
