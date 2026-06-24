import { motion } from 'framer-motion'
import { education } from '@/data/portfolio'

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16" style={{ background: 'var(--bg-subtle)' }}>
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="section-eyebrow">
            <motion.span
              className="section-eyebrow-line"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <span className="section-eyebrow-num">04 — Education</span>
            <motion.span
              className="section-eyebrow-line"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-sub">Academic foundation &amp; achievements</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="card p-5 sm:p-6 w-full"
        >
          {/* Degree + CGPA: stacks on mobile, row on sm+ */}
          <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <h3 className="font-black text-lg sm:text-xl mb-1 leading-tight break-words" style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}>
                🎓 {education.degree}
              </h3>
              <p className="font-semibold text-sm mb-1" style={{ color: 'var(--accent)' }}>{education.specialization}</p>
              <p className="text-sm break-words" style={{ color: 'var(--text-muted)' }}>{education.university} · {education.location}</p>
            </div>
            <div className="shrink-0 self-start">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl"
                style={{ background: 'var(--accent-dim)', border: '1px solid rgba(200,96,42,0.2)' }}
              >
                <span className="text-lg font-black" style={{ color: 'var(--accent)' }}>{education.cgpa}</span>
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>CGPA</span>
              </div>
            </div>
          </div>

          <div
            className="h-px w-full mb-6"
            style={{ background: 'var(--border)' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {education.achievements.map((a, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl text-sm"
                style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)' }}
              >
                <span className="text-base shrink-0">{a.icon}</span>
                <span className="break-words" style={{ color: 'var(--text-muted)', lineHeight: '1.5' }}>{a.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
