import { motion } from 'framer-motion'

const links = [
  { label: 'email', value: 'gurjots.ds.23@nitj.ac.in', href: 'mailto:gurjots.ds.23@nitj.ac.in' },
  { label: 'resume', value: 'resume.pdf ↗', href: '/resume.pdf', target: '_blank' },
  { label: 'github', value: 'github.com/gurjot', href: '#' },
  { label: 'linkedin', value: 'linkedin.com/in/gurjot', href: '#' },
  { label: 'leetcode', value: 'leetcode.com/gurjot', href: '#' },
  { label: 'codeforces', value: 'codeforces.com/gurjot', href: '#' },
]

export default function Contact() {
  return (
    <section id="contact" style={{ paddingBottom: 60 }}>
      <div className="wrap">
        <div className="eyebrow">05 · contact</div>
        <h2 className="section-title">Let's build something.</h2>
        <p className="section-sub">
          Open to backend, systems, and infra-leaning roles — reach out directly, no forms.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="mono"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: '26px 28px',
            maxWidth: 560,
          }}
        >
          <div style={{ color: 'var(--text-faint)', fontSize: 12, marginBottom: 16 }}>
            <span style={{ color: 'var(--accent)' }}>$</span> contact --list
          </div>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.target}
              rel={l.target ? 'noopener noreferrer' : undefined}
              style={{
                display: 'flex',
                gap: 14,
                fontSize: 13.5,
                padding: '9px 0',
                borderBottom: '1px solid var(--border)',
                color: 'var(--text)',
              }}
            >
              <span style={{ color: 'var(--accent-2)', minWidth: 84 }}>{l.label}:</span>
              <span style={{ color: 'var(--text-dim)' }}>{l.value}</span>
            </a>
          ))}
        </motion.div>
      </div>

      <footer className="wrap mono" style={{ marginTop: 90, paddingTop: 26, borderTop: '1px solid var(--border)', fontSize: 12, color: 'var(--text-faint)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
        <span>© {new Date().getFullYear()} Gurjot Singh</span>
        <span>built with vite · react · framer-motion</span>
      </footer>
    </section>
  )
}
