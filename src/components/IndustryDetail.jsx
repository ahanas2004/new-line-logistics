import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './IndustryDetail.css'

export default function IndustryDetail({ icon, title, subtitle, description, challenges, solutions, stats }) {
  return (
    <div className="industry-detail-page">

      {/* ── Page Hero ── */}
      <div className="page-hero id-hero">
        <div className="id-hero-glow" />
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="sep">/</span>
            <Link to="/industries">Industries</Link><span className="sep">/</span>
            {title}
          </div>
          <motion.div
            className="id-hero-icon"
            initial={{ opacity: 0, scale: 0.4, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
          >
            {icon}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span>{title}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
          <motion.div
            className="id-hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <Link to="/get-quote" className="btn-white">Get Sector Quote</Link>
            <a href="mailto:info@nexllogistics.com" className="btn-outline-white">✉️ Email Us</a>
          </motion.div>
        </div>
      </div>

      {/* ── Overview + Challenges ── */}
      <section className="id-overview">
        <div className="container industry-detail-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-tag">Industry Focus</p>
            <h2 className="section-title" style={{ marginBottom: 24 }}>
              Logistics for <span>{title}</span>
            </h2>
            {description.map((para, i) => (
              <p key={i} className="id-para">{para}</p>
            ))}
            <div style={{ marginTop: 36 }}>
              <Link to="/get-quote" className="btn-primary"><span>Get Sector Quote</span></Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="id-challenges-box">
              <h3 className="id-challenges-title">
                <span className="id-ch-icon">⚠️</span>
                Sector Challenges
              </h3>
              <ul className="id-challenges-list">
                {challenges.map((c, i) => (
                  <li key={i} className="id-challenge-item">
                    <span className="id-ch-bullet" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── NEXL Solutions ── */}
      <section className="id-solutions">
        <div className="container">
          <div className="section-center" style={{ marginBottom: 56 }}>
            <p className="section-tag">Our Approach</p>
            <h2 className="section-title">NEXL <span>Solutions</span></h2>
          </div>
          <div className="id-solutions-grid">
            {solutions.map((s, i) => (
              <motion.div
                key={i}
                className="id-solution-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="id-sol-icon">{s.icon}</div>
                <h4 className="id-sol-title">{s.title}</h4>
                <p className="id-sol-desc">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      {stats && (
        <section className="id-stats">
          <div className="id-stats-bg" />
          <div
            className="container stats-auto-grid"
            style={{ gridTemplateColumns: `repeat(${stats.length}, 1fr)` }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className="stat-box id-stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="id-stat-icon">{s.icon}</div>
                <div className="id-stat-value">{s.value}</div>
                <div className="id-stat-label">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="id-cta">
        <div className="container id-cta-inner">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-tag" style={{ justifyContent: 'center' }}>Ready to Ship?</p>
            <h2 className="section-title id-cta-title">
              Ship Your <span style={{ color: 'var(--orange-light)' }}>{title}</span> Cargo
            </h2>
            <p className="id-cta-sub">
              Speak with our {title.toLowerCase()} logistics specialist today.
            </p>
            <div className="id-cta-actions">
              <Link to="/get-quote" className="btn-white">Get a Free Quote</Link>
              <a href="mailto:info@nexllogistics.com" className="btn-outline-white">✉️ Email Us</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
