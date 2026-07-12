import { motion } from 'framer-motion'

const stats = [
  { k: 'degree', v: 'B.Tech · Data Science & Engineering' },
  { k: 'institute', v: 'NIT Jalandhar' },
  { k: 'cgpa', v: '8.29 / 10' },
  { k: 'leetcode', v: '700+ problems solved' },
  { k: 'codeforces', v: 'Specialist · 1500+ rating' },
]

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="eyebrow">01 · about</div>
        <h2 className="section-title">Backend-leaning, protocol-curious.</h2>
        <p className="section-sub">
          A quick read on how I got here and what I actually spend my time doing.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40 }} className="about-grid">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            style={{ fontSize: 16.5, color: 'var(--text-dim)', lineHeight: 1.8, maxWidth: 560 }}
          >
            I'm a Data Science & Engineering student at NIT Jalandhar who ended up
            spending most of my time in backend infrastructure and cryptography rather
            than models. I like systems where correctness actually matters — message
            ordering, key exchange, concurrent state — and I like taking a project from
            a rough architecture sketch to something that survives real traffic.
            Outside of coursework, I lead backend for a placement portal used by 1000+
            students, and I'm currently building an end-to-end encrypted chat platform
            from the WebSocket relay up.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mono"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '20px 22px',
              height: 'fit-content',
            }}
          >
            <div style={{ color: 'var(--text-faint)', fontSize: 12, marginBottom: 14 }}>
              <span style={{ color: 'var(--accent)' }}>$</span> cat about.json
            </div>
            {stats.map((s) => (
              <div key={s.k} style={{ display: 'flex', gap: 10, fontSize: 13, marginBottom: 10, alignItems: 'baseline' }}>
                <span style={{ color: 'var(--accent-2)', minWidth: 92 }}>{s.k}:</span>
                <span style={{ color: 'var(--text)' }}>{s.v}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
