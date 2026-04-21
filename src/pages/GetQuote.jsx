import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './GetQuote.css'

// Replaces wizard state and render logic with a single page form
export default function GetQuote() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '',
    serviceType: '', origin: '', destination: '',
    commodity: '', weightVolume: '', notes: ''
  })

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) return (
    <div style={{ minHeight: '100vh', background: 'var(--blue-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 'var(--nav-height)' }}>
      <motion.div
        style={{ background: 'white', padding: '64px 48px', textAlign: 'center', maxWidth: 520, margin: '0 24px' }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div style={{ fontSize: 72, marginBottom: 24 }}>🎉</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 32, textTransform: 'uppercase', color: 'var(--blue-900)', marginBottom: 16 }}>
          Enquiry Received!
        </h2>
        <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 12 }}>
          Thank you, <strong>{form.name}</strong>. Your enquiry has been submitted.
        </p>
        <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 32 }}>
          Our team will review your shipment details and reach out to <strong>{form.email}</strong> shortly.
        </p>
        <div style={{ background: 'var(--blue-100)', padding: '16px 24px', marginBottom: 32, textAlign: 'left' }}>
          <p style={{ fontSize: 13, color: 'var(--blue-700)', marginBottom: 4 }}><strong>Reference:</strong> NEXL-{Date.now().toString().slice(-8)}</p>
          <p style={{ fontSize: 13, color: 'var(--blue-700)' }}><strong>Service:</strong> {form.serviceType}</p>
        </div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-primary"><span>Back to Home</span></Link>
          <a href="tel:+919884886797" style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 24px', border: '2px solid var(--blue-500)', color: 'var(--blue-500)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, textDecoration: 'none', textTransform: 'uppercase' }}>
            📞 Call Us
          </a>
        </div>
      </motion.div>
    </div>
  )

  return (
    <div className="quote-page">
      <div className="quote-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="sep">/</span> Get a Quote
          </div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Send Us an <span>Enquiry</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Fill in your shipment details and receive a competitive quote within 4 business hours.
          </motion.p>
        </div>
      </div>

      <section className="quote-body">
        <div className="container">
          <form onSubmit={submit} className="quote-form" style={{ paddingBottom: 48 }}>
            <div className="qs-wrap">
              <h2 className="qs-title" style={{ marginBottom: 32 }}>Send Us an Enquiry</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input name="name" value={form.name} onChange={handle} required placeholder="Rajan Kumar" />
                </div>
                <div className="form-group">
                  <label>Company Name *</label>
                  <input name="company" value={form.company} onChange={handle} required placeholder="Acme Exports Pvt Ltd" />
                </div>
                
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" name="email" value={form.email} onChange={handle} required placeholder="you@company.com" />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input name="phone" value={form.phone} onChange={handle} required placeholder="+91 98400 00000" />
                </div>

                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label>Service Required *</label>
                  <select name="serviceType" value={form.serviceType} onChange={handle} required>
                    <option value="">-- Select a Service --</option>
                    <option>Sea Freight – FCL</option>
                    <option>Sea Freight – LCL</option>
                    <option>Air Freight</option>
                    <option>Customs Clearance</option>
                    <option>Door-to-Door</option>
                    <option>Project Cargo</option>
                    <option>Domestic & Coastal</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Origin Port / City *</label>
                  <input name="origin" value={form.origin} onChange={handle} required placeholder="Chennai / Mumbai" />
                </div>
                <div className="form-group">
                  <label>Destination Port / City *</label>
                  <input name="destination" value={form.destination} onChange={handle} required placeholder="Dubai / Singapore" />
                </div>

                <div className="form-group">
                  <label>Cargo Description *</label>
                  <input name="commodity" value={form.commodity} onChange={handle} required placeholder="Auto parts / Machinery" />
                </div>
                <div className="form-group">
                  <label>Weight / Volume</label>
                  <input name="weightVolume" value={form.weightVolume} onChange={handle} placeholder="1 x 20ft FCL" />
                </div>

                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label>Additional Notes</label>
                  <textarea name="notes" value={form.notes} onChange={handle} rows={4} placeholder="Special requirements, Incoterms, etc." />
                </div>
              </div>
              
              <div style={{ marginTop: 32, textAlign: 'center' }}>
                <button type="submit" className="btn-primary" style={{ width: '100%', maxWidth: 400 }}>
                  <span>Submit Quote Request →</span>
                </button>
              </div>
            </div>
          </form>

          {/* Side info */}
          <div className="quote-sidebar">
            <div className="qsb-card">
              <h4>⚡ Quick Response</h4>
              <p>Receive a competitive quote within <strong>4 business hours</strong> of submission.</p>
            </div>
            <div className="qsb-card">
              <h4>📞 Prefer to Call?</h4>
              <p><a href="tel:+919884886797">+91 98848 86797</a></p>
            </div>
            <div className="qsb-card">
              <h4>✉️ Email Us</h4>
              <p><a href="mailto:info@nexllogistics.com">info@nexllogistics.com</a></p>
            </div>
            <div className="qsb-card">
              <h4>🏅 Certifications</h4>
              <p>IATA · FIATA · FFFAI · Licensed CHA</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
