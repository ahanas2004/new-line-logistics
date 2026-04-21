import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const industries = [
  { icon: '🚗', title: 'Automotive', path: '/industries/automotive', desc: 'CKD/CBU vehicles and spare parts — JIT logistics for OEMs and dealers.', img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80' },
  { icon: '💊', title: 'Pharmaceuticals', path: '/industries/pharmaceuticals', desc: 'GDP-compliant cold chain logistics for APIs, formulations, and medical devices.', img: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800&q=80' },
  { icon: '⚙️', title: 'Oil & Gas', path: '/industries/oil-gas', desc: 'Project cargo and DG freight for upstream and downstream energy operations.', img: 'https://images.unsplash.com/photo-1620825937374-87fc7d6aaf8c?auto=format&fit=crop&w=800&q=80' },
  { icon: '🛒', title: 'Retail & E-commerce', path: '/industries/retail-ecommerce', desc: 'Fast, flexible cross-border freight for online retailers and marketplace sellers.', img: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c663c0?auto=format&fit=crop&w=800&q=80' },
  { icon: '🔧', title: 'Engineering', path: '/industries/engineering', desc: 'Heavy machinery, industrial equipment, and fabricated goods logistics.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80' },
  { icon: '🧪', title: 'Chemicals', path: '/industries/chemicals', desc: 'IMDG-compliant handling for hazardous and specialty chemical shipments.', img: 'https://images.unsplash.com/photo-1614935151651-0bea6508abb0?auto=format&fit=crop&w=800&q=80' },
]

export default function Industries() {
  return (
    <div>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="sep">/</span> Industries
          </div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Industries <span>We Serve</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Specialized logistics and compliance expertise across six key sectors of global trade.
          </motion.p>
        </div>
      </div>

      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 28 }}>
            {industries.map((ind, i) => (
              <motion.div
                key={ind.path}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={ind.path} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div style={{
                    background: 'white', border: '1px solid var(--gray-200)', height: '100%', cursor: 'pointer',
                    transition: 'all 0.3s', position: 'relative', overflow: 'hidden',
                    display: 'flex', flexDirection: 'column'
                  }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,36,150,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    <img src={ind.img} alt={ind.title} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                    <div style={{ padding: '24px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div style={{ fontSize: 32, marginBottom: 16 }}>{ind.icon}</div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, textTransform: 'uppercase', color: 'var(--blue-900)', marginBottom: 12 }}>{ind.title}</h3>
                      <p style={{ color: 'var(--gray-600)', fontSize: 14, lineHeight: 1.7, flex: 1, marginBottom: 24 }}>{ind.desc}</p>
                      <span style={{ color: 'var(--blue-500)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        Explore Solution →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--blue-100)', padding: '64px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title" style={{ color: 'var(--blue-900)', marginBottom: 16 }}>Don't See Your Industry?</h2>
          <p style={{ color: 'var(--gray-600)', marginBottom: 32 }}>We work across many more sectors. Contact us for a tailored solution.</p>
          <Link to="/contact" className="btn-primary">Contact Our Team</Link>
        </div>
      </section>
    </div>
  )
}
