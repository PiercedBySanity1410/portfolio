import { motion } from 'framer-motion'

const lines = [
  { prompt: '$', text: 'whoami', delay: 0 },
  { out: true, text: 'Gurjot Singh — Backend & Systems Engineer', delay: 0.15 },
  { prompt: '$', text: 'cat focus.txt', delay: 0.35 },
  { out: true, text: 'distributed systems · applied cryptography · E2EE messaging', delay: 0.5 },
  { prompt: '$', text: './build --stack go,react,ts --status shipping', delay: 0.7 },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

function HandshakeDiagram() {
  return (
    <svg viewBox="0 0 460 380" fill="none" style={{ width: '100%', height: 'auto' }} role="img" aria-label="Diagram of an encrypted handshake between two clients through a relay">
      <defs>
        <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#55e6c1" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#8b7cf6" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* background grid ring */}
      <circle cx="230" cy="180" r="150" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

      {/* static faint node shells */}
      <circle cx="72" cy="180" r="34" fill="var(--surface-2)" stroke="var(--border-strong)" />
      <circle cx="230" cy="70" r="30" fill="var(--surface-2)" stroke="var(--border-strong)" />
      <circle cx="388" cy="180" r="34" fill="var(--surface-2)" stroke="var(--border-strong)" />

      {/* edges */}
      <motion.path
        d="M104 176 L204 84"
        stroke="url(#edge)"
        strokeWidth="1.5"
        strokeDasharray="4 5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.6, ease: 'easeInOut' }}
      />
      <motion.path
        d="M256 84 L356 176"
        stroke="url(#edge)"
        strokeWidth="1.5"
        strokeDasharray="4 5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.85, ease: 'easeInOut' }}
      />

      {/* traveling packets */}
      <motion.circle
        r="4"
        fill="#55e6c1"
        initial={{ offsetDistance: '0%', opacity: 0 }}
        animate={{ offsetDistance: '100%', opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.4, delay: 1.6, repeat: Infinity, repeatDelay: 0.6, ease: 'easeInOut' }}
        style={{ offsetPath: "path('M104 176 L204 84 L256 84 L356 176')" }}
      />
      <motion.circle
        r="4"
        fill="#8b7cf6"
        initial={{ offsetDistance: '100%', opacity: 0 }}
        animate={{ offsetDistance: '0%', opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.4, delay: 2.6, repeat: Infinity, repeatDelay: 0.6, ease: 'easeInOut' }}
        style={{ offsetPath: "path('M104 176 L204 84 L256 84 L356 176')" }}
      />

      {/* nodes on top */}
      <g>
        <circle cx="72" cy="180" r="27" fill="var(--surface-3)" stroke="var(--accent)" strokeWidth="1.4" />
        <text x="72" y="185" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="var(--text)">A</text>
      </g>
      <g>
        <motion.circle
          cx="230" cy="70" r="24"
          fill="var(--surface-3)" stroke="var(--accent-2)" strokeWidth="1.4"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <text x="230" y="74" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="var(--text)">relay</text>
      </g>
      <g>
        <circle cx="388" cy="180" r="27" fill="var(--surface-3)" stroke="var(--accent)" strokeWidth="1.4" />
        <text x="388" y="185" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="var(--text)">B</text>
      </g>

      {/* lock badge */}
      <motion.g
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <rect x="182" y="230" width="96" height="28" rx="14" fill="var(--surface-2)" stroke="var(--border-strong)" />
        <rect x="196" y="240" width="9" height="8" rx="1.5" fill="var(--accent)" />
        <path d="M198 240 v-3.5 a3 3 0 0 1 6 0 V240" stroke="var(--accent)" strokeWidth="1.3" fill="none" />
        <text x="216" y="248" fontFamily="JetBrains Mono" fontSize="9.5" fill="var(--text-dim)">AES-GCM · P-256</text>
      </motion.g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="top" style={{ paddingTop: 150, paddingBottom: 90 }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 48, alignItems: 'center' }}>
        <div>
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="eyebrow">
            available for backend / systems roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: 'clamp(34px, 4.6vw, 54px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.02em', marginBottom: 22 }}
          >
            I build systems that keep secrets —
            <br />
            <span style={{ color: 'var(--accent)' }}>and ship them.</span>
          </motion.h1>

          <motion.div
            className="mono"
            variants={container}
            initial="hidden"
            animate="show"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '18px 20px',
              fontSize: 13.5,
              maxWidth: 480,
            }}
          >
            {lines.map((l, i) => (
              <motion.div key={i} variants={item} style={{ display: 'flex', gap: 8, marginBottom: 6, color: l.out ? 'var(--text-dim)' : 'var(--text)' }}>
                {l.prompt && <span style={{ color: 'var(--accent)' }}>{l.prompt}</span>}
                <span>{l.text}</span>
              </motion.div>
            ))}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.1, repeat: Infinity }}
              style={{ display: 'inline-block', width: 7, height: 14, background: 'var(--accent)', marginTop: 2 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            style={{ display: 'flex', gap: 12, marginTop: 30, flexWrap: 'wrap' }}
          >
            <a href="#projects" className="btn primary">view projects</a>
            <a href="#contact" className="btn">get in touch</a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <HandshakeDiagram />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #top .wrap { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
