import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './GetQuote.css'

const SERVICES = [
  { id: 'sea-fcl',    icon: '🚢', label: 'Sea Freight – FCL',     desc: 'Full container load' },
  { id: 'sea-lcl',    icon: '📦', label: 'Sea Freight – LCL',     desc: 'Groupage / partial load' },
  { id: 'air',        icon: '✈️', label: 'Air Freight',            desc: 'Express & charter' },
  { id: 'customs',    icon: '🗂️', label: 'Customs Clearance',     desc: 'Licensed CHA service' },
  { id: 'dtd',        icon: '🚚', label: 'Door-to-Door',           desc: 'End-to-end delivery' },
  { id: 'project',    icon: '🏗️', label: 'Project Cargo',          desc: 'ODC & heavy lift' },
  { id: 'domestic',   icon: '🛳️', label: 'Domestic & Coastal',    desc: 'Pan-India shipping' },
]

const TRUST_ITEMS = [
  { icon: '⚡', title: 'Fast Response', body: 'Quote within 4 business hours guaranteed.' },
  { icon: '🏅', title: 'IATA · FIATA · FFFAI', body: 'Internationally certified freight forwarder.' },
  { icon: '📞', title: 'Call Us', body: '+91 98848 86797', link: 'tel:+919884886797' },
  { icon: '✉️', title: 'Email Us', body: 'info@nexllogistics.com', link: 'mailto:info@nexllogistics.com' },
]

function genRef() {
  return 'NEXL-' + Date.now().toString(36).toUpperCase().slice(-6)
}

export default function GetQuote() {
  const [service, setService] = useState('')
  const [step, setStep] = useState(1) // 1 = service, 2 = shipment, 3 = contact
  const [submitted, setSubmitted] = useState(false)
  const [ref] = useState(genRef)
  const [form, setForm] = useState({
    origin: '', destination: '', commodity: '', weight: '',
    name: '', company: '', email: '', phone: '', notes: '',
  })

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const canNext1 = !!service
  const canNext2 = form.origin && form.destination && form.commodity
  const canSubmit = form.name && form.email && form.phone

  const submit = e => {
    e.preventDefault()
    if (!canSubmit) return
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  /* ─── Success Screen ─── */
  if (submitted) return (
    <div className="gq-success-wrap">
      <div className="gq-success-grid-bg" />
      <motion.div
        className="gq-success-card"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      >
        <motion.div
          className="gq-success-emoji"
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
        >🎉</motion.div>

        <h2 className="gq-success-heading">Enquiry Received!</h2>
        <p className="gq-success-body">
          Thank you, <strong>{form.name}</strong>. We've received your shipment details and will send a
          quote to <strong>{form.email}</strong> within 4 business hours.
        </p>

        <div className="gq-success-ref">
          <div className="gq-ref-row">
            <span>Reference ID</span>
            <strong className="gq-ref-id">{ref}</strong>
          </div>
          {service && (
            <div className="gq-ref-row">
              <span>Service</span>
              <strong>{SERVICES.find(s => s.id === service)?.label}</strong>
            </div>
          )}
          {form.origin && form.destination && (
            <div className="gq-ref-row">
              <span>Route</span>
              <strong>{form.origin} → {form.destination}</strong>
            </div>
          )}
        </div>

        <div className="gq-success-actions">
          <Link to="/" className="btn-primary"><span>Back to Home</span></Link>
          <a href="tel:+919884886797" className="btn-outline">📞 Call Us</a>
        </div>

        <p className="gq-success-note">
          Need immediate help? <a href="tel:+919884886797">Call +91 98848 86797</a>
        </p>
      </motion.div>
    </div>
  )

  /* ─── Main Quote Page ─── */
  return (
    <div className="gq-page">

      {/* ── Hero ── */}
      <div className="gq-hero">
        <div className="gq-hero-grid" />
        <div className="gq-hero-orb gq-orb-a" />
        <div className="gq-hero-orb gq-orb-b" />
        <div className="container gq-hero-inner">
          <motion.div
            className="gq-hero-text"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="breadcrumb">
              <Link to="/">Home</Link><span className="sep">/</span> Get a Quote
            </div>
            <div className="gq-live-badge">
              <span className="gq-live-dot" />
              Responding in under 4 hours
            </div>
            <h1>
              Get a Free<br />
              <span className="gq-h1-accent">Freight Quote</span>
            </h1>
            <p>Tell us about your shipment and our logistics experts will send you a competitive, tailored quote fast.</p>
          </motion.div>

          <motion.div
            className="gq-hero-stats"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { num: '150+', lbl: 'Ports' },
              { num: '80+',  lbl: 'Countries' },
              { num: '24/7', lbl: 'Support' },
              { num: '15+',  lbl: 'Yrs Exp' },
            ].map(s => (
              <div key={s.lbl} className="gq-stat-pill">
                <span className="gq-stat-num">{s.num}</span>
                <span className="gq-stat-lbl">{s.lbl}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="gq-body">
        <div className="container gq-layout">

          {/* ── FORM PANEL ── */}
          <form onSubmit={submit} className="gq-form-panel">

            {/* Progress Bar */}
            <div className="gq-progress">
              {['Service', 'Shipment', 'Contact'].map((label, i) => {
                const n = i + 1
                const done = n < step
                const active = n === step
                return (
                  <div key={label} className={`gq-step ${active ? 'active' : ''} ${done ? 'done' : ''}`}>
                    <div className="gq-step-circle">
                      {done ? '✓' : n}
                    </div>
                    <span className="gq-step-label">{label}</span>
                    {i < 2 && <div className={`gq-step-line ${done ? 'done' : ''}`} />}
                  </div>
                )
              })}
            </div>

            {/* ── Step 1: Service Selection ── */}
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  className="gq-step-body"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="gq-step-header">
                    <span className="gq-step-num-big">01</span>
                    <div>
                      <h2 className="gq-step-title">Select Your Service</h2>
                      <p className="gq-step-sub">What type of freight do you need?</p>
                    </div>
                  </div>
                  <div className="gq-service-grid">
                    {SERVICES.map(s => (
                      <button
                        key={s.id}
                        type="button"
                        className={`gq-svc-btn ${service === s.id ? 'selected' : ''}`}
                        onClick={() => setService(s.id)}
                      >
                        <span className="gq-svc-icon">{s.icon}</span>
                        <span className="gq-svc-label">{s.label}</span>
                        <span className="gq-svc-desc">{s.desc}</span>
                        {service === s.id && <span className="gq-svc-check">✓</span>}
                      </button>
                    ))}
                  </div>
                  <div className="gq-nav">
                    <button
                      type="button"
                      className="btn-primary"
                      disabled={!canNext1}
                      onClick={() => setStep(2)}
                    >
                      <span>Next: Shipment Details →</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ── Step 2: Shipment Details ── */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  className="gq-step-body"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="gq-step-header">
                    <span className="gq-step-num-big">02</span>
                    <div>
                      <h2 className="gq-step-title">Shipment Details</h2>
                      <p className="gq-step-sub">Tell us about your cargo</p>
                    </div>
                  </div>

                  <div className="gq-field-grid">
                    <div className="gq-field">
                      <label>Origin Port / City <span className="req">*</span></label>
                      <input name="origin" value={form.origin} onChange={handle} required placeholder="e.g. Chennai, Mumbai" />
                    </div>
                    <div className="gq-field">
                      <label>Destination Port / City <span className="req">*</span></label>
                      <input name="destination" value={form.destination} onChange={handle} required placeholder="e.g. Dubai, Singapore" />
                    </div>
                    <div className="gq-field">
                      <label>Cargo Description <span className="req">*</span></label>
                      <input name="commodity" value={form.commodity} onChange={handle} required placeholder="e.g. Auto parts, Machinery" />
                    </div>
                    <div className="gq-field">
                      <label>Weight / Volume</label>
                      <input name="weight" value={form.weight} onChange={handle} placeholder="e.g. 1 × 20ft FCL / 500 kg" />
                    </div>
                    <div className="gq-field gq-field-full">
                      <label>Additional Notes</label>
                      <textarea name="notes" value={form.notes} onChange={handle} rows={4} placeholder="Special requirements, Incoterms, hazardous goods info, etc." />
                    </div>
                  </div>

                  <div className="gq-nav gq-nav-two">
                    <button type="button" className="btn-outline" onClick={() => setStep(1)}>← Back</button>
                    <button type="button" className="btn-primary" disabled={!canNext2} onClick={() => setStep(3)}>
                      <span>Next: Your Details →</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ── Step 3: Contact Info ── */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  className="gq-step-body"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="gq-step-header">
                    <span className="gq-step-num-big">03</span>
                    <div>
                      <h2 className="gq-step-title">Your Contact Info</h2>
                      <p className="gq-step-sub">So we can send your quote</p>
                    </div>
                  </div>

                  <div className="gq-field-grid">
                    <div className="gq-field">
                      <label>Full Name <span className="req">*</span></label>
                      <input name="name" value={form.name} onChange={handle} required placeholder="Rajan Kumar" />
                    </div>
                    <div className="gq-field">
                      <label>Company Name</label>
                      <input name="company" value={form.company} onChange={handle} placeholder="Acme Exports Pvt Ltd" />
                    </div>
                    <div className="gq-field">
                      <label>Email Address <span className="req">*</span></label>
                      <input type="email" name="email" value={form.email} onChange={handle} required placeholder="you@company.com" />
                    </div>
                    <div className="gq-field">
                      <label>Phone Number <span className="req">*</span></label>
                      <input name="phone" value={form.phone} onChange={handle} required placeholder="+91 98400 00000" />
                    </div>
                  </div>

                  {/* Summary card */}
                  <div className="gq-summary">
                    <h4 className="gq-summary-title">📋 Enquiry Summary</h4>
                    <div className="gq-summary-grid">
                      <div className="gq-summary-row">
                        <span>Service</span>
                        <strong>{SERVICES.find(s => s.id === service)?.label || '—'}</strong>
                      </div>
                      <div className="gq-summary-row">
                        <span>Route</span>
                        <strong>{form.origin || '—'} → {form.destination || '—'}</strong>
                      </div>
                      <div className="gq-summary-row">
                        <span>Cargo</span>
                        <strong>{form.commodity || '—'}</strong>
                      </div>
                      {form.weight && (
                        <div className="gq-summary-row">
                          <span>Volume</span>
                          <strong>{form.weight}</strong>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="gq-nav gq-nav-two">
                    <button type="button" className="btn-outline" onClick={() => setStep(2)}>← Back</button>
                    <button type="submit" className="btn-primary gq-submit-btn" disabled={!canSubmit}>
                      <span>Submit Quote Request 🚀</span>
                    </button>
                  </div>

                  <p className="gq-privacy-note">
                    🔒 Your details are secure and used only for this enquiry.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          {/* ── SIDEBAR ── */}
          <aside className="gq-sidebar">
            {TRUST_ITEMS.map(t => (
              <div key={t.title} className="gq-trust-card">
                <span className="gq-trust-icon">{t.icon}</span>
                <div>
                  <h4 className="gq-trust-title">{t.title}</h4>
                  {t.link
                    ? <a href={t.link} className="gq-trust-link">{t.body}</a>
                    : <p className="gq-trust-body">{t.body}</p>
                  }
                </div>
              </div>
            ))}
            <div className="gq-sidebar-cta">
              <p className="gq-sc-label">Serving exporters in</p>
              <p className="gq-sc-num">80+ Countries</p>
              <p className="gq-sc-sub">Since 2009 · Chennai, India</p>
            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}
