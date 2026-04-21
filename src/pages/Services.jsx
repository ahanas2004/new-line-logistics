import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const services = [
  {
    icon: '🚢', title: 'Sea Freight', path: '/services/sea-freight',
    desc: 'FCL & LCL ocean freight services connecting to over 150 ports worldwide. Competitive rates with major shipping lines.',
    features: ['FCL & LCL Options', '150+ Ports', 'Real-time Tracking', 'Full Documentation'],
  },
  {
    icon: '✈️', title: 'Air Freight', path: '/services/air-freight',
    desc: 'Express and charter solutions for time-critical shipments with global airline partnerships.',
    features: ['Express Delivery', 'Charter Services', 'Perishable Cargo', 'Dangerous Goods'],
  },
  {
    icon: '📦', title: 'LCL Consolidation', path: '/services/lcl-consolidation',
    desc: 'Cost-effective weekly groupage shipments for smaller cargo volumes with competitive rates.',
    features: ['Weekly Departures', 'Cost Efficient', 'Flexible Volumes', 'Hub Network'],
  },
  {
    icon: '🗂️', title: 'Customs Clearance', path: '/services/customs-clearance',
    desc: 'Expert CHA services including IEC, Bill of Entry (BOE), and duty drawback handling.',
    features: ['Licensed CHA', 'BOE Filing', 'Duty Drawback', 'IEC Support'],
  },
  {
    icon: '🚚', title: 'Door-to-Door', path: '/services/door-to-door',
    desc: 'Comprehensive management from initial pick-up to final delivery, end-to-end.',
    features: ['Pick-up & Delivery', 'Last-Mile Service', 'Warehousing', 'Full Visibility'],
  },
  {
    icon: '🏗️', title: 'Project Cargo', path: '/services/project-cargo',
    desc: 'Specialists in ODC, heavy lift, and out-of-gauge cargo requiring specialized handling.',
    features: ['ODC Cargo', 'Heavy Lift', 'Out-of-Gauge', 'Route Survey'],
  },
  {
    icon: '🛳️', title: 'Domestic & Coastal', path: '/services/domestic-coastal',
    desc: 'Pan-India surface and coastal shipping at competitive rates across all major ports.',
    features: ['Pan-India Network', 'Coastal Shipping', 'Surface Transport', 'Competitive Rates'],
  },
]

export default function Services() {
  return (
    <div>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="sep">/</span> Services
          </div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Our <span>Services</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            End-to-end freight solutions built for the demands of modern global trade.
          </motion.p>
        </div>
      </div>

      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 28 }}>
            {services.map((s, i) => (
              <motion.div
                key={s.path}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link to={s.path} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div className="card" style={{ height: '100%', cursor: 'pointer' }}>
                    <div style={{ fontSize: 48, marginBottom: 20 }}>{s.icon}</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, textTransform: 'uppercase', color: 'var(--blue-900)', marginBottom: 12 }}>{s.title}</h3>
                    <p style={{ color: 'var(--gray-600)', lineHeight: 1.6, fontSize: 14, marginBottom: 20 }}>{s.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                      {s.features.map(f => (
                        <span key={f} style={{ background: 'var(--blue-100)', color: 'var(--blue-700)', fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 2 }}>{f}</span>
                      ))}
                    </div>
                    <span style={{ color: 'var(--blue-500)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Learn More →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--blue-700)', padding: '64px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title" style={{ color: 'white', marginBottom: 16 }}>Ready to Ship?</h2>
          <p style={{ color: 'var(--blue-200)', marginBottom: 32 }}>Get a competitive quote in under 4 hours.</p>
          <Link to="/get-quote" className="btn-white">Get a Free Quote</Link>
        </div>
      </section>
    </div>
  )
}
