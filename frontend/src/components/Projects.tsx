import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/icons'
import { projects } from '@/data/portfolio'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16" style={{ background: 'var(--bg-subtle)' }}>
      <div className="max-w-6xl mx-auto w-full">
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
            <span className="section-eyebrow-num">06 — Projects</span>
            <motion.span
              className="section-eyebrow-line"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-sub">Showcasing my development work and technical solutions</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="card card-spotlight p-5 sm:p-6 flex flex-col group"
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect()
                e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
                e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className="text-xs font-black tracking-widest transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
                  style={{ color: 'var(--accent)', fontFamily: "'JetBrains Mono', monospace", opacity: 0.4, display: 'inline-block', transformOrigin: 'left center' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                {/* Icon row: shrinks to prevent overflow */}
                <div className="flex gap-1.5 shrink-0">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200"
                      style={{ color: 'var(--text-faint)', border: '1px solid var(--border)' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'rgba(200,96,42,0.3)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-faint)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                    >
                      <GithubIcon size={14} />
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live demo"
                      className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200"
                      style={{ color: 'var(--text-faint)', border: '1px solid var(--border)' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'rgba(200,96,42,0.3)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-faint)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-bold text-base mb-2 leading-snug break-words" style={{ color: 'var(--text)', letterSpacing: '-0.01em' }}>
                {p.name}
              </h3>
              <p className="text-sm leading-relaxed flex-1 mb-5 break-words" style={{ color: 'var(--text-muted)', lineHeight: '1.65' }}>
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {p.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/Romit-18/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-60"
            style={{ color: 'var(--text-muted)' }}
          >
            <GithubIcon size={16} /> View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
