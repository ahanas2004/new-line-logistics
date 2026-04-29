import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './ServiceDetail.css'

export default function ServiceDetail({ icon, title, subtitle, description, features, process, highlights, img }) {
  return (
    <div className="service-detail-page">

      {/* ── Page Hero ── */}
      <div className="page-hero sd-hero" style={{ backgroundImage: `url(${img})` }}>
        <div className="sd-hero-overlay" />
        <div className="sd-hero-glow" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="sep">/</span>
            <Link to="/services">Services</Link><span className="sep">/</span>
            {title}
          </div>
          <motion.div
            className="sd-hero-icon"
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
            className="sd-hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <Link to="/get-quote" className="btn-white">Get a Free Quote</Link>
            <a href="tel:+919884886797" className="btn-outline-white">📞 Call Us Now</a>
          </motion.div>
        </div>
      </div>

      {/* ── Overview ── */}
      <section className="sd-overview">
        <div className="container detail-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-tag">Overview</p>
            <h2 className="section-title" style={{ marginBottom: 24 }}>
              Service <span>Details</span>
            </h2>
            {description.map((para, i) => (
              <p key={i} className="sd-para">{para}</p>
            ))}
            <div style={{ marginTop: 36 }}>
              <Link to="/get-quote" className="btn-primary"><span>Request a Quote</span></Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="sd-features-box">
              <h3 className="sd-features-title">Key Features</h3>
              <div className="sd-features-list">
                {features.map((f, i) => (
                  <motion.div
                    key={i}
                    className="sd-feature-item"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="sd-feature-icon">{f.icon}</div>
                    <div>
                      <strong>{f.title}</strong>
                      <p>{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Process ── */}
      {process && (
        <section className="sd-process">
          <div className="container">
            <div className="section-center" style={{ marginBottom: 56 }}>
              <p className="section-tag">How We Work</p>
              <h2 className="section-title">Our <span>Process</span></h2>
            </div>
            <div
              className="process-grid"
              style={{ gridTemplateColumns: `repeat(${Math.min(process.length, 4)}, 1fr)` }}
            >
              {process.map((step, i) => (
                <motion.div
                  key={i}
                  className="sd-process-step"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="sd-step-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="sd-step-connector" />
                  <h4 className="sd-step-title">{step.title}</h4>
                  <p className="sd-step-desc">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Highlights ── */}
      {highlights && (
        <section className="sd-highlights">
          <div className="sd-highlights-bg" />
          <div className="container sd-highlights-grid">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                className="sd-highlight-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="sd-hi-icon">{h.icon}</div>
                <div className="sd-hi-value">{h.value}</div>
                <div className="sd-hi-label">{h.label}</div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="sd-cta">
        <div className="container sd-cta-inner">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-tag" style={{ justifyContent: 'center' }}>Ready to Ship?</p>
            <h2 className="section-title sd-cta-title">Need This <span style={{ color: 'var(--orange-light)' }}>Service?</span></h2>
            <p className="sd-cta-sub">Our team is ready to provide a competitive quote within 4 hours.</p>
            <div className="sd-cta-actions">
              <Link to="/get-quote" className="btn-white">Get a Free Quote</Link>
              <a href="tel:+919884886797" className="btn-outline-white">📞 Call Us Now</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
