import { motion } from 'framer-motion'
import { MapPin, Briefcase } from 'lucide-react'
import { experiences } from '@/data/portfolio'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16" style={{ background: 'var(--bg)' }}>
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
            <span className="section-eyebrow-num">03 — Experience</span>
            <motion.span
              className="section-eyebrow-line"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-sub">Building solutions that matter</p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="card card-spotlight card-accent-bar p-5 sm:p-6 group"
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect()
                e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
                e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
              }}
            >
              {/* Header: stacks on mobile, side-by-side on sm+ */}
              <div className="flex flex-col gap-2 mb-5 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <Briefcase size={14} style={{ color: 'var(--accent)' }} />
                    <span className="font-bold text-sm" style={{ color: 'var(--accent)' }}>{exp.company}</span>
                    {exp.current && <span className="badge badge-green">Current</span>}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg leading-snug mb-1 break-words" style={{ color: 'var(--text)', letterSpacing: '-0.01em' }}>
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-faint)' }}>
                    <MapPin size={11} />
                    <span>{exp.location}</span>
                  </div>
                </div>
                {/* Period badge: full-width on mobile so it doesn't overflow */}
                <span
                  className="text-xs font-mono w-full sm:w-auto shrink-0 px-3 py-1.5 rounded-lg self-start"
                  style={{
                    color: 'var(--text-muted)',
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border)',
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: '0.02em',
                  }}
                >
                  {exp.period}
                </span>
              </div>

              <ul className="flex flex-col gap-2.5">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm leading-relaxed break-words" style={{ color: 'var(--text-muted)' }}>
                    <span
                      className="mt-2 shrink-0"
                      style={{ width: 4, height: 4, minWidth: 4, borderRadius: '50%', background: 'var(--accent)', opacity: 0.7 }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
