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
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 150, damping: 15 } },
}

function HandshakeDiagram() {
  return (
    <div style={{
      position: 'relative',
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 16,
      padding: '24px 20px',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
    }}>
      {/* Background glow effects */}
      <div style={{
        position: 'absolute',
        top: -40,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 220,
        height: 120,
        background: 'radial-gradient(circle, rgba(85,230,193,0.12) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        fontSize: 11.5,
        color: 'var(--text-dim)',
        fontFamily: 'var(--mono)'
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
          E2EE HANDSHAKE PROTOCOL
        </span>
        <span style={{ color: 'var(--text-faint)' }}>CURVE25519 · AES-GCM</span>
      </div>

      <svg viewBox="0 0 440 250" fill="none" style={{ width: '100%', height: 'auto', display: 'block' }} role="img" aria-label="Diagram of an encrypted handshake between two clients through a relay">
        <defs>
          <linearGradient id="relayGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#55e6c1" />
            <stop offset="100%" stopColor="#8b7cf6" />
          </linearGradient>
          <linearGradient id="tunnelGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#55e6c1" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#8b7cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#55e6c1" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Connection Paths */}
        <path
          d="M 70 140 L 220 55"
          stroke="var(--border-strong)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M 220 55 L 370 140"
          stroke="var(--border-strong)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* Direct E2EE Virtual Tunnel Path */}
        <path
          d="M 70 175 C 160 215, 280 215, 370 175"
          stroke="url(#tunnelGrad)"
          strokeWidth="2"
          strokeDasharray="5 5"
        />

        {/* Animated Packets along Left/Right paths using direct keyframes */}
        <motion.circle
          r="4.5"
          fill="#55e6c1"
          animate={{
            cx: [70, 220, 370, 370],
            cy: [140, 55, 140, 140],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 0.5
          }}
        />

        <motion.circle
          r="4.5"
          fill="#8b7cf6"
          animate={{
            cx: [370, 220, 70, 70],
            cy: [140, 55, 140, 140],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
            repeatDelay: 0.5
          }}
        />

        {/* Packet traveling across E2EE Tunnel */}
        <motion.circle
          r="3.5"
          fill="#55e6c1"
          animate={{
            cx: [70, 220, 370],
            cy: [175, 195, 175],
            opacity: [0, 0.9, 0]
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8
          }}
        />

        {/* Relay Server Node (Top Center) */}
        <g transform="translate(220, 55)">
          <motion.circle
            r="28"
            fill="var(--surface-2)"
            stroke="url(#relayGrad)"
            strokeWidth="1.8"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <circle r="18" fill="var(--surface-3)" />
          <path d="M -6 -4 L 0 -10 L 6 -4 M 0 -9 V 6 M -6 4 L 0 10 L 6 4" stroke="var(--text)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <text y="42" textAnchor="middle" fill="var(--text)" fontSize="11" fontWeight="600" fontFamily="var(--mono)">RELAY HUB</text>
          <text y="55" textAnchor="middle" fill="var(--text-faint)" fontSize="9" fontFamily="var(--mono)">ZERO-KNOWLEDGE</text>
        </g>

        {/* Client A Node (Left) */}
        <g transform="translate(70, 155)">
          <rect x="-52" y="-26" width="104" height="52" rx="10" fill="var(--surface-2)" stroke="#55e6c1" strokeWidth="1.5" />
          <circle cx="-32" cy="0" r="12" fill="rgba(85,230,193,0.15)" />
          <path d="M -35 -2 V -5 C -35 -6.5 -33.5 -8 -32 -8 C -30.5 -8 -29 -6.5 -29 -5 V -2" stroke="#55e6c1" strokeWidth="1.3" fill="none" />
          <rect x="-36" y="-2" width="8" height="7" rx="1.5" fill="#55e6c1" />
          <text x="-12" y="-4" fill="var(--text)" fontSize="11" fontWeight="600" fontFamily="var(--mono)">CLIENT A</text>
          <text x="-12" y="10" fill="#55e6c1" fontSize="9.5" fontFamily="var(--mono)">PUB_KEY_A</text>
        </g>

        {/* Client B Node (Right) */}
        <g transform="translate(370, 155)">
          <rect x="-52" y="-26" width="104" height="52" rx="10" fill="var(--surface-2)" stroke="#8b7cf6" strokeWidth="1.5" />
          <circle cx="-32" cy="0" r="12" fill="rgba(139,124,246,0.15)" />
          <path d="M -35 -2 V -5 C -35 -6.5 -33.5 -8 -32 -8 C -30.5 -8 -29 -6.5 -29 -5 V -2" stroke="#8b7cf6" strokeWidth="1.3" fill="none" />
          <rect x="-36" y="-2" width="8" height="7" rx="1.5" fill="#8b7cf6" />
          <text x="-12" y="-4" fill="var(--text)" fontSize="11" fontWeight="600" fontFamily="var(--mono)">CLIENT B</text>
          <text x="-12" y="10" fill="#8b7cf6" fontSize="9.5" fontFamily="var(--mono)">PUB_KEY_B</text>
        </g>

        {/* E2EE Tunnel Label */}
        <g transform="translate(220, 202)">
          <rect x="-68" y="-11" width="136" height="22" rx="11" fill="var(--surface-3)" stroke="var(--border)" />
          <text y="3.5" textAnchor="middle" fill="var(--text-dim)" fontSize="9.5" fontFamily="var(--mono)">🔒 E2EE TUNNEL (AES-256)</text>
        </g>
      </svg>

      {/* Protocol Steps Footer */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 8,
        marginTop: 14,
        paddingTop: 14,
        borderTop: '1px solid var(--border)'
      }}>
        <div style={{ fontSize: 11, fontFamily: 'var(--mono)' }}>
          <div style={{ color: 'var(--accent)', marginBottom: 2 }}>01. ECDH EXCHANGE</div>
          <div style={{ color: 'var(--text-faint)', fontSize: 10 }}>Ephemeral public keys routed via untrusted relay</div>
        </div>
        <div style={{ fontSize: 11, fontFamily: 'var(--mono)' }}>
          <div style={{ color: '#8b7cf6', marginBottom: 2 }}>02. KEY DERIVATION</div>
          <div style={{ color: 'var(--text-faint)', fontSize: 10 }}>Shared secret derived locally on end devices</div>
        </div>
        <div style={{ fontSize: 11, fontFamily: 'var(--mono)' }}>
          <div style={{ color: 'var(--text)', marginBottom: 2 }}>03. DOUBLE RATCHET</div>
          <div style={{ color: 'var(--text-faint)', fontSize: 10 }}>Per-message forward & backward secrecy</div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" style={{ paddingTop: 150, paddingBottom: 90 }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 48, alignItems: 'center' }}>
        <div>
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 120, damping: 20 }} className="eyebrow">
            available for backend / systems roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
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
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.9 }}
            style={{ display: 'flex', gap: 12, marginTop: 30, flexWrap: 'wrap' }}
          >
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#projects" className="btn primary">view projects</motion.a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#contact" className="btn">get in touch</motion.a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">resume.pdf ↗</motion.a>
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
