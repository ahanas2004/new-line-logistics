import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const services = [
  { label: 'Sea Freight', path: '/services/sea-freight', icon: '🚢' },
  { label: 'Air Freight', path: '/services/air-freight', icon: '✈️' },
  { label: 'LCL Consolidation', path: '/services/lcl-consolidation', icon: '📦' },
  { label: 'Customs Clearance', path: '/services/customs-clearance', icon: '🗂️' },
  { label: 'Door-to-Door', path: '/services/door-to-door', icon: '🚚' },
  { label: 'Project Cargo', path: '/services/project-cargo', icon: '🏗️' },
  { label: 'Domestic & Coastal', path: '/services/domestic-coastal', icon: '🛳️' },
]

const industries = [
  { label: 'Automotive', path: '/industries/automotive', icon: '🚗' },
  { label: 'Pharmaceuticals', path: '/industries/pharmaceuticals', icon: '💊' },
  { label: 'Oil & Gas', path: '/industries/oil-gas', icon: '⚙️' },
  { label: 'Retail & E-commerce', path: '/industries/retail-ecommerce', icon: '🛒' },
  { label: 'Engineering', path: '/industries/engineering', icon: '🔧' },
  { label: 'Chemicals', path: '/industries/chemicals', icon: '🧪' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <Link to="/" className="nav-logo">
            <img src="/nexl_logo.jpeg" alt="NEXL" />
          </Link>

          <div className="nav-links">
            <NavLink to="/" className="nav-item" end>Home</NavLink>
            <NavLink to="/about" className="nav-item">About</NavLink>

            <div
              className={`nav-item has-dropdown ${location.pathname.startsWith('/services') ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/services" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                Services <span className="chevron">▾</span>
              </Link>
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    className="dropdown"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                  >
                    {services.map(s => (
                      <Link key={s.path} to={s.path} className="dropdown-item">
                        <span className="di-icon">{s.icon}</span>
                        {s.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className={`nav-item has-dropdown ${location.pathname.startsWith('/industries') ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/industries" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                Industries <span className="chevron">▾</span>
              </Link>
              <AnimatePresence>
                {activeDropdown === 'industries' && (
                  <motion.div
                    className="dropdown"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                  >
                    {industries.map(i => (
                      <Link key={i.path} to={i.path} className="dropdown-item">
                        <span className="di-icon">{i.icon}</span>
                        {i.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/contact" className="nav-item">Contact</NavLink>
          </div>

          <div className="nav-actions">
            <Link to="/get-quote" className="btn-primary">
              <span>Get Quote</span>
            </Link>
          </div>

          <button
            className={`hamburger ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="mobile-menu-inner">
              <NavLink to="/" className="mob-link" end>Home</NavLink>
              <NavLink to="/about" className="mob-link">About</NavLink>

              <div className="mob-expandable">
                <button onClick={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')} className="mob-expand-btn">
                  Services <span className={mobileExpanded === 'services' ? 'rot' : ''}>▾</span>
                </button>
                <AnimatePresence>
                  {mobileExpanded === 'services' && (
                    <motion.div
                      initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                      style={{ overflow: 'hidden' }}
                    >
                      {services.map(s => (
                        <Link key={s.path} to={s.path} className="mob-sub-link">
                          {s.icon} {s.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mob-expandable">
                <button onClick={() => setMobileExpanded(mobileExpanded === 'industries' ? null : 'industries')} className="mob-expand-btn">
                  Industries <span className={mobileExpanded === 'industries' ? 'rot' : ''}>▾</span>
                </button>
                <AnimatePresence>
                  {mobileExpanded === 'industries' && (
                    <motion.div
                      initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                      style={{ overflow: 'hidden' }}
                    >
                      {industries.map(i => (
                        <Link key={i.path} to={i.path} className="mob-sub-link">
                          {i.icon} {i.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink to="/contact" className="mob-link">Contact</NavLink>
              <Link to="/get-quote" className="btn-primary" style={{ marginTop: 24, justifyContent: 'center' }}>
                <span>Get a Quote</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
