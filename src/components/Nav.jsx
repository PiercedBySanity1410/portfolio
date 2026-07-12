import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'skills', label: 'skills' },
  { id: 'contact', label: 'contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: scrolled || mobileOpen ? 'blur(12px)' : 'none',
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
    >
      <nav className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 66 }}>
        <a href="#top" className="mono" style={{ fontSize: 14, fontWeight: 700, letterSpacing: '-0.01em' }}>
          gurjot<span style={{ color: 'var(--accent)' }}>@</span>dev<span style={{ color: 'var(--text-faint)' }}>:~$</span>
        </a>

        {/* Desktop Navigation Links */}
        <ul style={{ display: 'flex', gap: 28, listStyle: 'none' }} className="nav-links">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="mono"
                style={{ fontSize: 13, color: 'var(--text-dim)', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-dim)')}
              >
                ./{l.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn mono desktop-resume-btn" style={{ padding: '8px 16px', fontSize: 12.5 }}>
            resume.pdf ↗
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-menu-btn mono"
            aria-label="Toggle Navigation Menu"
            style={{
              background: 'transparent',
              border: '1px solid var(--border-strong)',
              borderRadius: 6,
              color: 'var(--text)',
              padding: '7px 12px',
              fontSize: 13,
              display: 'none',
              alignItems: 'center',
              gap: 6
            }}
          >
            <span style={{ color: 'var(--accent)' }}>{mobileOpen ? '×' : '≡'}</span>
            <span>{mobileOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ overflow: 'hidden', borderTop: '1px solid var(--border)' }}
            className="mobile-drawer"
          >
            <ul style={{ listStyle: 'none', padding: '16px 28px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setMobileOpen(false)}
                    className="mono"
                    style={{ fontSize: 15, color: 'var(--text)', display: 'block', padding: '4px 0' }}
                  >
                    <span style={{ color: 'var(--accent)' }}>./</span>{l.label}
                  </a>
                </li>
              ))}
              <li style={{ paddingTop: 8, borderTop: '1px solid var(--border)' }}>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="btn primary mono"
                  style={{ width: '100%', justifyContent: 'center', marginTop: 6 }}
                >
                  view resume.pdf ↗
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 720px) {
          .nav-links { display: none !important; }
          .desktop-resume-btn { display: none !important; }
          .mobile-menu-btn { display: inline-flex !important; }
        }
      `}</style>
    </motion.header>
  )
}
