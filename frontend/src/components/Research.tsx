import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { patents, publication } from '@/data/portfolio'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export default function Research() {
  return (
    <section id="research" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16" style={{ background: 'var(--bg)' }}>
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
            <span className="section-eyebrow-num">05 — Research</span>
            <motion.span
              className="section-eyebrow-line"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
          <h2 className="section-title">Innovation &amp; Research</h2>
          <p className="section-sub">Patents and publications showcasing my research contributions</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {patents.map((p) => (
            <motion.div
              key={p.applicationNo}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="card card-spotlight p-5 sm:p-6"
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect()
                e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
                e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
              }}
            >
              <div className="flex items-center gap-2 mb-5 flex-wrap">
                <span className="badge badge-red">Patent</span>
                <span className="text-xs" style={{ color: 'var(--text-faint)' }}>Co-Applicant</span>
              </div>
              <div className="text-3xl mb-4">🏅</div>
              <h3 className="font-bold text-base mb-2 leading-snug break-words" style={{ color: 'var(--text)', letterSpacing: '-0.01em' }}>
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5 break-words" style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {p.description}
              </p>
              <p
                className="text-xs break-words"
                style={{ color: 'var(--text-faint)', fontFamily: "'JetBrains Mono', monospace" }}
              >
                {p.applicationNo}
              </p>
            </motion.div>
          ))}

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="card card-spotlight p-5 sm:p-6"
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect()
              e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
              e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
            }}
          >
            <div className="flex items-center gap-2 mb-5 flex-wrap">
              <span className="badge badge-blue">Publication</span>
              <span className="text-xs" style={{ color: 'var(--text-faint)' }}>Author</span>
            </div>
            <div className="text-3xl mb-4">📄</div>
            <h3 className="font-bold text-base mb-2 leading-snug break-words" style={{ color: 'var(--text)', letterSpacing: '-0.01em' }}>
              {publication.title}
            </h3>
            <p className="text-sm leading-relaxed mb-5 break-words" style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
              {publication.venue}
            </p>
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70"
              style={{ color: '#60a5fa' }}
            >
              {publication.linkLabel} <ExternalLink size={13} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
