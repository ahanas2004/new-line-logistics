import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="sep">/</span> Contact
          </div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Get In <span>Touch</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Our team is ready 24/7 to assist with your freight requirements.
          </motion.p>
        </div>
      </div>

      <section className="contact-section">
        <div className="container contact-grid">

          {/* Info */}
          <motion.div className="contact-info" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="section-tag">Contact Details</p>
            <h2 className="section-title" style={{ marginBottom: 32 }}>Reach <span>NEXL</span></h2>

            <div className="contact-cards">
              <div className="cc">
                <div className="cc-icon">📍</div>
                <div>
                  <strong>Office Address</strong>
                  <p>New No. 134, Old No. 264, 3rd Floor,<br />Thambu Chetty Street, Mannady,<br />George Town, Chennai – 600001</p>
                </div>
              </div>
              <div className="cc">
                <div className="cc-icon">📞</div>
                <div>
                  <strong>Phone</strong>
                  <p><a href="tel:+919884886797">+91 98848 86797</a></p>
                </div>
              </div>
              <div className="cc">
                <div className="cc-icon">✉️</div>
                <div>
                  <strong>Email</strong>
                  <p><a href="mailto:info@nexllogistics.com">info@nexllogistics.com</a></p>
                </div>
              </div>
              <div className="cc">
                <div className="cc-icon">👤</div>
                <div>
                  <strong>Proprietor</strong>
                  <p>Mohammed Idhirish</p>
                </div>
              </div>
              <div className="cc">
                <div className="cc-icon">🕐</div>
                <div>
                  <strong>Business Hours</strong>
                  <p>Mon–Sat: 9:00 AM – 7:00 PM<br />24/7 Emergency support available</p>
                </div>
              </div>
            </div>

            <div className="cert-badges">
              <span>IATA</span><span>FIATA</span><span>FFFAI</span><span>Licensed CHA</span>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {submitted ? (
              <div className="success-box">
                <div style={{ fontSize: 64, marginBottom: 24 }}>✅</div>
                <h3>Message Sent!</h3>
                <p>Thank you for contacting NEXL. Our team will respond within 4 business hours.</p>
                <button onClick={() => setSubmitted(false)} className="btn-primary" style={{ marginTop: 24 }}><span>Send Another</span></button>
              </div>
            ) : (
              <form onSubmit={submit} className="contact-form">
                <h3>Send Us a Message</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input name="name" value={form.name} onChange={handle} required placeholder="Your full name" />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={handle} required placeholder="your@email.com" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input name="phone" value={form.phone} onChange={handle} placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div className="form-group">
                    <label>Subject *</label>
                    <select name="subject" value={form.subject} onChange={handle} required>
                      <option value="">Select a topic</option>
                      <option>Sea Freight Enquiry</option>
                      <option>Air Freight Enquiry</option>
                      <option>Customs Clearance</option>
                      <option>LCL Consolidation</option>
                      <option>Project Cargo</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea name="message" value={form.message} onChange={handle} required rows={5} placeholder="Tell us about your shipment requirements..." />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}><span>Send Message →</span></button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Map placeholder */}
      <div className="map-section">
        <iframe
          title="NEXL Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.231!2d80.2876!3d13.0877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA1JzE1LjciTiA4MMKwMTcnMTUuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="400"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </div>
  )
}
