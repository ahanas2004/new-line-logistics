import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion'
import './Home.css'

/* ─── Animated SVG Vehicles ─── */
function FlyingPlane({ delay = 0, y = 80 }) {
  return (
    <motion.div
      className="anim-vehicle plane"
      style={{ top: y }}
      initial={{ x: '-15vw', opacity: 0 }}
      animate={{ x: '115vw', opacity: [0, 1, 1, 0] }}
      transition={{ duration: 14, delay, repeat: Infinity, repeatDelay: 18, ease: 'linear' }}
    >
      <svg width="80" height="28" viewBox="0 0 80 28" fill="none">
        <path d="M2 14L20 8L60 4L76 12L60 14L40 18L20 20L4 16Z" fill="#1e5bb5" opacity="0.9"/>
        <path d="M20 8L40 0L55 4L60 4" fill="#2e7dd1" opacity="0.8"/>
        <path d="M20 20L30 28L38 20" fill="#1a4a8a" opacity="0.7"/>
        <path d="M76 12L80 14L76 16L60 14Z" fill="#1e5bb5" opacity="0.9"/>
        <ellipse cx="30" cy="14" rx="4" ry="3" fill="#5ba4e6" opacity="0.5"/>
      </svg>
      <div className="plane-trail" />
    </motion.div>
  )
}

function SailingShip({ delay = 0 }) {
  return (
    <motion.div
      className="anim-vehicle ship"
      initial={{ x: '115vw' }}
      animate={{ x: '-20vw' }}
      transition={{ duration: 30, delay, repeat: Infinity, repeatDelay: 10, ease: 'linear' }}
    >
      <svg width="120" height="64" viewBox="0 0 120 64" fill="none">
        <path d="M10 44L30 36L60 32L90 34L110 42L108 52L12 52Z" fill="#0f3460" opacity="0.85"/>
        <path d="M30 36L32 12L50 32L30 36Z" fill="#1e5bb5" opacity="0.7"/>
        <path d="M60 32L62 8L80 30L60 32Z" fill="#2e7dd1" opacity="0.7"/>
        <path d="M10 52Q60 60 110 52" fill="none" stroke="#5ba4e6" strokeWidth="1.5" opacity="0.5"/>
        <rect x="32" y="10" width="1.5" height="26" fill="#0a1628" opacity="0.6"/>
        <rect x="62" y="6" width="1.5" height="26" fill="#0a1628" opacity="0.6"/>
      </svg>
    </motion.div>
  )
}

function DrivingTruck({ delay = 0, y = 0 }) {
  return (
    <motion.div
      className="anim-vehicle truck"
      style={{ bottom: y }}
      initial={{ x: '-20vw', opacity: 0 }}
      animate={{ x: '115vw', opacity: [0, 1, 1, 0] }}
      transition={{ duration: 20, delay, repeat: Infinity, repeatDelay: 15, ease: 'linear' }}
    >
      <svg width="100" height="44" viewBox="0 0 100 44" fill="none">
        <rect x="20" y="8" width="60" height="26" rx="2" fill="#0f3460" opacity="0.85"/>
        <rect x="2" y="18" width="22" height="16" rx="2" fill="#1a4a8a" opacity="0.9"/>
        <rect x="6" y="20" width="10" height="8" rx="1" fill="#5ba4e6" opacity="0.5"/>
        <circle cx="22" cy="36" r="6" fill="#0a1628" opacity="0.9"/>
        <circle cx="22" cy="36" r="3" fill="#2e7dd1" opacity="0.7"/>
        <circle cx="78" cy="36" r="6" fill="#0a1628" opacity="0.9"/>
        <circle cx="78" cy="36" r="3" fill="#2e7dd1" opacity="0.7"/>
        <rect x="96" y="22" width="4" height="3" rx="1" fill="#e8620a" opacity="0.8"/>
      </svg>
    </motion.div>
  )
}

/* ─── Stats Counter ─── */
function StatCounter({ value, label, suffix = '+' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const target = parseInt(value)
    const duration = 2000
    const step = target / (duration / 16)
    let current = 0
    const timer = setInterval(() => {
      current = Math.min(current + step, target)
      setCount(Math.floor(current))
      if (current >= target) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <motion.div
      ref={ref}
      className="stat-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="stat-value">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </motion.div>
  )
}

/* ─── Service Card ─── */
function ServiceCard({ icon, title, desc, path, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Link to={path} className="service-card">
        <div className="sc-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <span className="sc-arrow">Learn more</span>
      </Link>
    </motion.div>
  )
}

/* ─── Industry Card ─── */
function IndustryCard({ icon, title, path, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <Link to={path} className="industry-card">
        <span className="ic-icon">{icon}</span>
        <span className="ic-title">{title}</span>
        <span className="ic-arrow">→</span>
      </Link>
    </motion.div>
  )
}

/* ─── Main Component ─── */
export default function Home() {
  return (
    <div className="home">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg-grid" />
        <div className="hero-world-map" />

        {/* Animated vehicles */}
        <FlyingPlane delay={1} y={100} />
        <FlyingPlane delay={12} y={160} />
        <SailingShip delay={3} />
        <DrivingTruck delay={5} y={10} />

        {/* Floating orbs */}
        <motion.div className="hero-orb hero-orb-1"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div className="hero-orb hero-orb-2"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
        <motion.div className="hero-orb hero-orb-3"
          animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: 11, repeat: Infinity }}
        />

        <div className="container hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-dot" />
            IATA · FIATA · FFFAI Certified · Chennai
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            GLOBAL FREIGHT <br className="hide-mobile" />
            <span className="hero-gradient-text">SOLUTIONS</span><br className="hide-mobile" />
            DELIVERED PRECISELY
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Seamless sea freight, air freight & customs clearance from Chennai to 80+ countries. Real-time tracking, expert documentation, 24/7 support.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link to="/get-quote" className="btn-primary"><span>Get a Free Quote</span></Link>
            <Link to="/services" className="btn-outline-white">Explore Services →</Link>
          </motion.div>

          <motion.div
            className="hero-trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="trust-item"><span className="ti-num">150+</span><span className="ti-lbl">Ports</span></div>
            <div className="trust-div" />
            <div className="trust-item"><span className="ti-num">80+</span><span className="ti-lbl">Countries</span></div>
            <div className="trust-div" />
            <div className="trust-item"><span className="ti-num">24/7</span><span className="ti-lbl">Support</span></div>
            <div className="trust-div" />
            <div className="trust-item"><span className="ti-num">15+</span><span className="ti-lbl">Years Exp.</span></div>
          </motion.div>
        </div>

        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >↓</motion.div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-center">
            <p className="section-tag">Simple Process</p>
            <h2 className="section-title">How It <span>Works</span></h2>
          </div>
          <div className="hiw-steps">
            {[
              { n: '01', icon: '📋', title: 'Enquire', desc: 'Submit your shipment details online or by phone.' },
              { n: '02', icon: '💬', title: 'Quote', desc: 'Receive a transparent, competitive quote within 4 hours.' },
              { n: '03', icon: '✅', title: 'Book', desc: 'Confirm booking — we handle all documentation.' },
              { n: '04', icon: '🚀', title: 'Deliver', desc: 'Full tracking until cargo reaches its destination.' },
            ].map((s, i) => (
              <motion.div
                key={s.n}
                className="hiw-step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="hiw-num">{s.n}</div>
                <div className="hiw-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                {i < 3 && <div className="hiw-connector" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="section-tag">What We Offer</p>
              <h2 className="section-title">Our Core <span>Services</span></h2>
            </div>
            <Link to="/services" className="btn-outline">View All Services</Link>
          </div>
          <div className="services-grid">
            <ServiceCard icon="🚢" title="Sea Freight" desc="FCL & LCL ocean freight to 150+ ports worldwide with full tracking." path="/services/sea-freight" delay={0} />
            <ServiceCard icon="✈️" title="Air Freight" desc="Express & charter solutions for time-critical shipments globally." path="/services/air-freight" delay={0.1} />
            <ServiceCard icon="📦" title="LCL Consolidation" desc="Cost-effective weekly groupage for smaller cargo volumes." path="/services/lcl-consolidation" delay={0.2} />
            <ServiceCard icon="🗂️" title="Customs Clearance" desc="Expert CHA — IEC, Bill of Entry, duty drawback handling." path="/services/customs-clearance" delay={0.3} />
            <ServiceCard icon="🚚" title="Door-to-Door" desc="End-to-end management from pick-up to final delivery." path="/services/door-to-door" delay={0.4} />
            <ServiceCard icon="🏗️" title="Project Cargo" desc="ODC, heavy lift and out-of-gauge cargo specialists." path="/services/project-cargo" delay={0.5} />
            <ServiceCard icon="🛳️" title="Domestic & Coastal" desc="Pan-India surface and coastal shipping at competitive rates." path="/services/domestic-coastal" delay={0.6} />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-section">
        <div className="container">
          <StatCounter value="150" label="Ports Worldwide" />
          <StatCounter value="80" label="Country Network" />
          <StatCounter value="5000" label="Shipments Handled" suffix="+" />
          <StatCounter value="15" label="Years Experience" />
          <StatCounter value="24" label="Support Coverage" suffix="/7" />
        </div>
      </section>

      {/* ── WHY NEXL ── */}
      <section className="why-section">
        <div className="container why-inner">
          <motion.div
            className="why-visual"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="globe-wrap">
              <div className="globe-ring ring1" />
              <div className="globe-ring ring2" />
              <div className="globe-ring ring3" />
              <div className="globe-core">
                <img src="/nexl_logo.jpeg" alt="NEXL" />
              </div>
              {[
                { r: 160, duration: 25 },
                { r: 160, duration: 25 },
                { r: 120, duration: 18 },
                { r: 120, duration: 18 },
                { r: 80, duration: 12 },
                { r: 80, duration: 12 },
              ].map((dot, i) => (
                <motion.div
                  key={i}
                  className="orbit-dot"
                  style={{ width: dot.r }}
                  initial={{ rotate: i * 75 }}
                  animate={{ rotate: (i * 75) + 360 }}
                  transition={{ duration: dot.duration, repeat: Infinity, ease: 'linear' }}
                />
              ))}
            </div>
          </motion.div>

          <div className="why-content">
            <p className="section-tag">The NEXL Advantage</p>
            <h2 className="section-title">Why Choose <span>NEXL?</span></h2>
            <div className="why-list">
              {[
                { icon: '📡', title: 'Real-time Tracking', desc: '24/7 shipment visibility from origin to destination.' },
                { icon: '🏅', title: 'Industry Accreditations', desc: 'IATA, FIATA, and FFFAI certified with licensed in-house CHA.' },
                { icon: '🌐', title: 'Global Reach', desc: 'Trusted agent network spanning 80+ countries worldwide.' },
                { icon: '📄', title: 'Expert Documentation', desc: 'Bills of Lading, Airway Bills, and customs paperwork handled flawlessly.' },
                { icon: '🤝', title: 'Dedicated Support', desc: '24/7 access to personal account managers.' },
                { icon: '💰', title: 'Competitive Pricing', desc: 'Volume contracts with major carriers and shipping lines.' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="why-item"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="wi-icon">{item.icon}</div>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="industries-section">
        <div className="container">
          <div className="section-center">
            <p className="section-tag">Sectors We Serve</p>
            <h2 className="section-title">Industries <span>We Serve</span></h2>
          </div>
          <div className="industries-grid">
            <IndustryCard icon="🚗" title="Automotive" path="/industries/automotive" delay={0} />
            <IndustryCard icon="💊" title="Pharmaceuticals" path="/industries/pharmaceuticals" delay={0.1} />
            <IndustryCard icon="⚙️" title="Oil & Gas" path="/industries/oil-gas" delay={0.2} />
            <IndustryCard icon="🛒" title="Retail & E-commerce" path="/industries/retail-ecommerce" delay={0.3} />
            <IndustryCard icon="🔧" title="Engineering" path="/industries/engineering" delay={0.4} />
            <IndustryCard icon="🧪" title="Chemicals" path="/industries/chemicals" delay={0.5} />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-vehicles">
          <FlyingPlane delay={0} y={30} />
          <DrivingTruck delay={4} y={20} />
        </div>
        <div className="container cta-inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-tag" style={{ justifyContent: 'center' }}>Ready to Ship?</p>
            <h2 className="section-title" style={{ color: 'white', textAlign: 'center' }}>
              Move Your Cargo <span style={{ color: 'var(--orange-light)' }}>With Confidence</span>
            </h2>
            <p>Get a competitive quote in under 4 hours. Our team is ready 24/7.</p>
            <div className="cta-actions">
              <Link to="/get-quote" className="btn-white">Get a Free Quote</Link>
              <a href="tel:+919884886797" className="btn-outline-white">📞 +91 98848 86797</a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
