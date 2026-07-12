import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LINKS = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'skills', label: 'skills' },
  { id: 'contact', label: 'contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

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
        background: scrolled ? 'rgba(10,14,20,0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
    >
      <nav className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 66 }}>
        <a href="#top" className="mono" style={{ fontSize: 14, fontWeight: 700, letterSpacing: '-0.01em' }}>
          gurjot<span style={{ color: 'var(--accent)' }}>@</span>dev<span style={{ color: 'var(--text-faint)' }}>:~$</span>
        </a>
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
        <a href="#contact" className="btn mono" style={{ padding: '8px 16px', fontSize: 12.5 }}>
          resume.pdf ↗
        </a>
      </nav>
      <style>{`
        @media (max-width: 720px) {
          .nav-links { display: none; }
        }
      `}</style>
    </motion.header>
  )
}
