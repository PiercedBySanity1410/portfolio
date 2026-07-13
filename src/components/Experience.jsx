import { motion } from 'framer-motion'

const roles = [
  {
    period: 'Jun 2026 — Present',
    title: 'AI Agent Development Intern (AEH)',
    org: 'Accenture · Bangalore',
    link: '',
    points: [
      'Architected and deployed enterprise-grade AI agents leveraging Retrieval-Augmented Generation (RAG) pipelines.',
      'Managed vector embeddings in scalable vector databases to improve semantic search and reduce hallucinations.',
      'Integrated workflows via Node.js and Python backend services, building interactive React.js/Tailwind CSS interfaces.',
    ],
    stack: ['Node.js', 'Python', 'React', 'Tailwind CSS', 'RAG', 'LLMs', 'Vector Databases'],
  },
  {
    period: '2026',
    title: 'Full-Stack Developer',
    org: 'Third Space Travel · Freelance',
    link: 'https://thirdspacetravel.com/',
    points: [
      'Developed a travel booking platform with 30+ REST APIs using React, TypeScript, Express, and MySQL.',
      'Integrated the PhonePe Payment Gateway SDK for secure online payments.',
      'Optimized database schema and queries with Prisma ORM for faster API performance.',
    ],
    stack: ['React', 'TypeScript', 'Express', 'MySQL', 'Prisma', 'tRPC'],
  },
  {
    period: '2025 — present',
    title: 'Top Contributor',
    org: 'Xceed Timetable Module · NIT Jalandhar',
    link: 'https://xceed.nitj.ac.in/',
    points: [
      'Revamped the timetable engine for conflict-free scheduling across 10+ departments.',
      'Implemented search, filtering, and Google Maps integration for 5000+ users.',
      'Optimized backend queries to improve scalability and response times.',
    ],
    stack: ['React', 'Express', 'MongoDB', 'TailwindCSS'],
  },
  {
    period: '2024 — present',
    title: 'Backend Assistant Lead',
    org: 'CTP Portal · NIT Jalandhar',
    link: 'https://ctp.nitj.ac.in/',
    points: [
      "Built and maintained backend services for NITJ's placement portal serving 1000+ students and 200+ recruiters.",
      'Developed 25+ secure REST APIs for placements, verification, and job workflows.',
      'Built role-based dashboards and optimized backend performance for peak placement seasons.',
    ],
    stack: ['React', 'Express', 'MongoDB', 'TailwindCSS'],
  }
]

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="wrap">
        <div className="eyebrow">02 · experience</div>
        <h2 className="section-title">Where the work happened.</h2>
        <p className="section-sub">Newest first — each entry is a real system with real users.</p>

        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: 7, top: 8, bottom: 8, width: 1, background: 'var(--border-strong)' }} />
          {roles.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              style={{ position: 'relative', paddingLeft: 34, marginBottom: 44 }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 6,
                  width: 15,
                  height: 15,
                  borderRadius: '50%',
                  background: 'var(--bg)',
                  border: '2px solid var(--accent)',
                }}
              />
              <div className="mono" style={{ fontSize: 12.5, color: 'var(--accent)', marginBottom: 6 }}>{r.period}</div>
              <h3 style={{ fontSize: 19, fontWeight: 600, marginBottom: 2 }}>{r.title}</h3>
              <div style={{ color: 'var(--text-dim)', fontSize: 14, marginBottom: 12 }}>{r.org}</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 14 }}>
                {r.points.map((p) => (
                  <li key={p} style={{ display: 'flex', gap: 10, fontSize: 14.5, color: 'var(--text-dim)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--accent-2)', flexShrink: 0 }}>›</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: r.link ? 16 : 0 }}>
                {r.stack.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
              {r.link && (
                <a href={r.link} target="_blank" rel="noopener noreferrer" className="mono" style={{ fontSize: 13, color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  see website ↗
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
