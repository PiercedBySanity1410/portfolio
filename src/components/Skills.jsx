import { motion } from 'framer-motion'

const groups = [
  { name: 'languages', items: ['C++', 'C', 'Go', 'TypeScript', 'JavaScript', 'Python'] },
  { name: 'web', items: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'tRPC', 'gRPC', 'WebSockets', 'Prisma ORM', 'SQL'] },
  { name: 'ai_ml', items: ['TensorFlow', 'Scikit-learn', 'OpenCV', 'LangChain', 'LangGraph', 'NLP', 'CNN / RNN / Transformers'] },
  { name: 'data_infra', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'Docker', 'Kubernetes'] },
  { name: 'tooling', items: ['Git', 'GitHub', 'Figma', 'Google Colab', 'Jupyter'] },
]

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="wrap">
        <div className="eyebrow">04 · skills</div>
        <h2 className="section-title">manifest.toml</h2>
        <p className="section-sub">The stack, grouped the way I actually reach for it.</p>

        <div
          className="mono"
          style={{
            background: 'var(--bg)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: '28px 30px',
            fontSize: 13.5,
          }}
        >
          {groups.map((g, gi) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: gi * 0.06 }}
              style={{ marginBottom: gi === groups.length - 1 ? 0 : 22 }}
            >
              <div style={{ color: 'var(--accent-2)', marginBottom: 10 }}>
                [<span style={{ color: 'var(--text)' }}>{g.name}</span>]
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
                {g.items.map((it) => (
                  <span key={it} className="tag">{it}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
