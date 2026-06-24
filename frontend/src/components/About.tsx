import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16" style={{ background: 'var(--bg-subtle)' }}>
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
            <span className="section-eyebrow-num">01 — About</span>
            <motion.span
              className="section-eyebrow-line"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
          <h2 className="section-title">Who I Am</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-5">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-base leading-relaxed break-words text-center"
            style={{ color: 'var(--text-muted)', lineHeight: '1.9' }}
          >
            I'm a <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Software Development Engineer</strong> with 1+ year of production experience building real-time voice AI systems, LLM-powered applications, and scalable REST APIs.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18, duration: 0.5 }}
            className="text-base leading-relaxed break-words text-center"
            style={{ color: 'var(--text-muted)', lineHeight: '1.9' }}
          >
            I specialize in end-to-end conversational AI pipelines with <span style={{ color: 'var(--accent)', fontWeight: 600 }}>sub-500ms latency</span> using Python, FastAPI, WebRTC, Deepgram, LangChain, and Docker.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.26, duration: 0.5 }}
            className="text-base leading-relaxed break-words text-center"
            style={{ color: 'var(--text-muted)', lineHeight: '1.9' }}
          >
            My work spans full-stack development across <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Python, .NET Core, Flutter, and React</strong>. I'm a <span style={{ color: '#60a5fa', fontWeight: 600 }}>2× Patent Co-Applicant</span> with published research in Computer Vision and NLP.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
