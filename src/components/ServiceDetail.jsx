import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ServiceDetail({ icon, title, subtitle, description, features, process, highlights }) {
  return (
    <div>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="sep">/</span>
            <Link to="/services">Services</Link><span className="sep">/</span>
            {title}
          </div>
          <motion.div style={{ fontSize: 64, marginBottom: 16 }}
            initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            {icon}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <span>{title}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>{subtitle}</motion.p>
        </div>
      </div>

      {/* Overview */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container detail-grid">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="section-tag">Overview</p>
            <h2 className="section-title" style={{ marginBottom: 24 }}>Service <span>Details</span></h2>
            {description.map((para, i) => (
              <p key={i} style={{ color: 'var(--text-body)', lineHeight: 1.75, marginBottom: 16 }}>{para}</p>
            ))}
            <div style={{ marginTop: 32 }}>
              <Link to="/get-quote" className="btn-primary"><span>Request a Quote</span></Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div style={{ background: 'var(--blue-900)', padding: 40 }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, textTransform: 'uppercase', color: 'white', marginBottom: 24, letterSpacing: '0.06em' }}>
                Key Features
              </h3>
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  style={{ display: 'flex', gap: 16, marginBottom: 20, alignItems: 'flex-start' }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div style={{ width: 32, height: 32, background: 'var(--blue-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 16 }}>{f.icon}</div>
                  <div>
                    <strong style={{ display: 'block', color: 'white', fontFamily: 'var(--font-display)', fontSize: 14, textTransform: 'uppercase', marginBottom: 4 }}>{f.title}</strong>
                    <p style={{ color: 'var(--blue-300)', fontSize: 13, lineHeight: 1.5 }}>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      {process && (
        <section style={{ padding: '80px 0', background: 'var(--gray-100)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <p className="section-tag" style={{ justifyContent: 'center' }}>How We Work</p>
              <h2 className="section-title">Our <span>Process</span></h2>
            </div>
            <div className="process-grid" style={{ gridTemplateColumns: `repeat(${process.length}, 1fr)` }}>
              {process.map((step, i) => (
                <motion.div
                  key={i}
                  style={{ textAlign: 'center', padding: '32px 20px' }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div style={{ width: 60, height: 60, background: 'var(--blue-500)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: 'white' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, textTransform: 'uppercase', color: 'var(--blue-900)', marginBottom: 10 }}>{step.title}</h4>
                  <p style={{ fontSize: 13, color: 'var(--gray-600)', lineHeight: 1.6 }}>{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Highlights */}
      {highlights && (
        <section style={{ padding: '64px 0', background: 'var(--blue-700)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  style={{ textAlign: 'center', padding: '24px 16px' }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div style={{ fontSize: 40, marginBottom: 12 }}>{h.icon}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: 'white', marginBottom: 6 }}>{h.value}</div>
                  <div style={{ fontSize: 13, color: 'var(--blue-200)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section style={{ background: 'var(--blue-700)', padding: '64px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title" style={{ color: 'white', marginBottom: 16 }}>Need This Service?</h2>
          <p style={{ color: 'var(--blue-200)', marginBottom: 32 }}>Our team is ready to provide a competitive quote within 4 hours.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/get-quote" className="btn-white">Get a Free Quote</Link>
            <a href="tel:+919884886797" className="btn-outline-white" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'white', border: '2px solid rgba(255,255,255,0.4)', padding: '13px 30px', textDecoration: 'none', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'all 0.3s' }}>
              📞 Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
