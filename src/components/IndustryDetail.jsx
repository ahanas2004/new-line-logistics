import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function IndustryDetail({ icon, title, subtitle, description, challenges, solutions, stats }) {
  return (
    <div>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="sep">/</span>
            <Link to="/industries">Industries</Link><span className="sep">/</span>
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
        <div className="container industry-detail-grid">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="section-tag">Industry Focus</p>
            <h2 className="section-title" style={{ marginBottom: 24 }}>Logistics for <span>{title}</span></h2>
            {description.map((para, i) => (
              <p key={i} style={{ color: 'var(--text-body)', lineHeight: 1.75, marginBottom: 16 }}>{para}</p>
            ))}
            <div style={{ marginTop: 32 }}>
              <Link to="/get-quote" className="btn-primary"><span>Get Sector Quote</span></Link>
            </div>
          </motion.div>

          {/* Challenges */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div style={{ background: 'var(--gray-100)', padding: 40 }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, textTransform: 'uppercase', color: 'var(--blue-900)', marginBottom: 24, letterSpacing: '0.06em' }}>
                Sector Challenges
              </h3>
              {challenges.map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 16, alignItems: 'flex-start' }}>
                  <div style={{ width: 8, height: 8, background: 'var(--orange)', borderRadius: '50%', marginTop: 6, flexShrink: 0 }} />
                  <p style={{ color: 'var(--gray-600)', fontSize: 14, lineHeight: 1.6 }}>{c}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEXL Solutions */}
      <section style={{ padding: '80px 0', background: 'var(--gray-100)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p className="section-tag" style={{ justifyContent: 'center' }}>Our Approach</p>
            <h2 className="section-title">NEXL <span>Solutions</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {solutions.map((s, i) => (
              <motion.div
                key={i}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, textTransform: 'uppercase', color: 'var(--blue-900)', marginBottom: 10 }}>{s.title}</h4>
                <p style={{ color: 'var(--gray-600)', fontSize: 14, lineHeight: 1.6 }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      {stats && (
        <section style={{ background: 'var(--blue-700)', padding: '64px 0' }}>
          <div className="container stats-auto-grid" style={{ gridTemplateColumns: `repeat(${stats.length}, 1fr)` }}>
            {stats.map((s, i) => (
              <motion.div key={i} className="stat-box" style={{ textAlign: 'center', padding: '24px 16px', borderRight: i !== stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div style={{ fontSize: 36, marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 36, color: 'white', marginBottom: 4 }}>{s.value}</div>
                <div style={{ fontSize: 12, color: 'var(--blue-200)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      <section style={{ background: 'var(--blue-700)', padding: '64px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title" style={{ color: 'white', marginBottom: 16 }}>Ship Your {title} Cargo</h2>
          <p style={{ color: 'var(--blue-200)', marginBottom: 32 }}>Speak with our {title.toLowerCase()} logistics specialist today.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/get-quote" className="btn-white">Get a Free Quote</Link>
            <a href="mailto:info@nexllogistics.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'white', border: '2px solid rgba(255,255,255,0.4)', padding: '13px 30px', textDecoration: 'none', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'all 0.3s' }}>
              ✉️ Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
