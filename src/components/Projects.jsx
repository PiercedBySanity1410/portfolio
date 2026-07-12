import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Encrypted Chat System',
    tag: 'sole developer · 2026',
    desc:
      "An end-to-end encrypted messaging platform built from the relay up — a Go WebSocket hub with Redis-backed queuing for offline delivery, ticket-based ECDSA authentication, and a two-layer packet protocol (routing envelope + AES-GCM encrypted, ECDSA-signed payload). Implements the Double Ratchet algorithm for perfect forward secrecy in 1-to-1 chats and Sender Keys for group scaling.",
    stack: ['Go', 'WebSockets', 'React.js', 'Protocol Buffers', 'PostgreSQL', 'Redis'],
    seed: 1,
    links: { repo: '#' },
  },
  {
    name: 'Amazon Review Sentiment Analyzer',
    tag: 'course project · 2026',
    desc:
      'An NLP pipeline that preprocesses and vectorizes large e-commerce review datasets, then classifies polarity with a TF-IDF + LinearSVC model. Includes a full visualization layer for tracking product feedback trends over time.',
    stack: ['Python', 'Scikit-Learn', 'Pandas', 'Matplotlib'],
    seed: 2,
    links: { repo: '#' },
  },
]

function seededRandom(seed) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

function ProjectGlyph({ seed }) {
  const rand = seededRandom(seed * 97 + 13)
  const nodes = Array.from({ length: 6 }, (_, i) => ({
    x: 30 + rand() * 300,
    y: 24 + rand() * 132,
    r: 2.5 + rand() * 3,
  }))
  const edges = nodes.slice(1).map((n, i) => [nodes[i], n])

  return (
    <svg viewBox="0 0 360 180" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <rect width="360" height="180" fill="var(--surface-2)" />
      <rect width="360" height="180" fill="none" stroke="var(--border)" />
      {edges.map((e, i) => (
        <line
          key={i}
          x1={e[0].x} y1={e[0].y} x2={e[1].x} y2={e[1].y}
          stroke={i % 2 === 0 ? 'var(--accent-dim)' : 'var(--accent-2-dim)'}
          strokeWidth="1"
          strokeDasharray="3 4"
        />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={n.r} fill={i % 2 === 0 ? 'var(--accent)' : 'var(--accent-2)'} opacity="0.85" />
      ))}
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="eyebrow">03 · projects</div>
        <h2 className="section-title">Things I've built end to end.</h2>
        <p className="section-sub">Placeholder diagrams stand in for screenshots for now.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 26 }} className="project-grid">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              style={{
                border: '1px solid var(--border)',
                borderRadius: 10,
                overflow: 'hidden',
                background: 'var(--surface)',
                display: 'flex',
                flexDirection: 'column',
              }}
              whileHover={{ y: -4, borderColor: 'var(--border-strong)' }}
            >
              <div style={{ aspectRatio: '2 / 1' }}>
                <ProjectGlyph seed={p.seed} />
              </div>
              <div style={{ padding: '22px 24px 26px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div className="mono" style={{ fontSize: 11.5, color: 'var(--text-faint)', marginBottom: 8 }}>{p.tag}</div>
                <h3 style={{ fontSize: 19, fontWeight: 600, marginBottom: 10 }}>{p.name}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.7, marginBottom: 18, flex: 1 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
                  {p.stack.map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
                <a href={p.links.repo} className="mono" style={{ fontSize: 13, color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  view repository ↗
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 780px) {
          .project-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
