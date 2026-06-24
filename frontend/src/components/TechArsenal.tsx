import { motion } from 'framer-motion'

const categories = [
  {
    name: 'Languages & Frameworks',
    items: [
      { label: 'Python',         icon: 'devicon-python-plain colored' },
      { label: 'Dart / Flutter', icon: 'devicon-flutter-plain colored' },
      { label: 'Java',           icon: 'devicon-java-plain colored' },
      { label: 'FastAPI',        icon: 'devicon-fastapi-plain colored' },
      { label: '.NET Core (C#)', icon: 'devicon-dotnetcore-plain colored' },
      { label: 'React.js',       icon: 'devicon-react-original colored' },
    ],
  },
  {
    name: 'AI / GenAI',
    items: [
      { label: 'LangChain',         icon: 'devicon-python-plain colored' },
      { label: 'Pipecat',           icon: 'devicon-python-plain colored' },
      { label: 'OpenAI / GPT-4',    emoji: '🤖' },
      { label: 'Deepgram STT',      emoji: '🎙️' },
      { label: 'ElevenLabs TTS',    emoji: '🔊' },
      { label: 'Whisper / Ollama',  emoji: '🐳' },
      { label : 'RAG', emoji: '📚' },
    ],
  },
  {
    name: 'Databases & Vector Stores',
    items: [
      { label: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
      { label: 'MongoDB',    icon: 'devicon-mongodb-plain colored' },
      { label: 'MSSQL',      icon: 'devicon-microsoftsqlserver-plain colored' },
      { label: 'FAISS',      emoji: '🔍' },
      { label: 'Pinecone',   emoji: '🌲' },
      { label: 'Qdrant',     emoji: '🗄️' },
    ],
  },
  {
    name: 'Real-Time, APIs & Infra',
    items: [
      { label: 'WebRTC', emoji: '📡' },
      { label: 'WebSockets',        emoji: '⚡' },
      { label: 'REST / JWT',        emoji: '🔑' },
      { label: 'Docker',            icon: 'devicon-docker-plain colored' },
      { label: 'Cloudflare',             icon: 'devicon-cloudflare-plain colored' },
      { label: 'Git / GitHub',      icon: 'devicon-github-original' },
    ],
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
}
const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.25 } },
}

export default function TechArsenal() {
  return (
    <section id="tech" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16" style={{ background: 'var(--bg)' }}>
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
            <span className="section-eyebrow-num">02 — Stack</span>
            <motion.span
              className="section-eyebrow-line"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
          <h2 className="section-title">Tech Arsenal</h2>
          <p className="section-sub">Technologies I work with</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="card card-spotlight p-5 sm:p-6"
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect()
                e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
                e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
              }}
            >
              {/* Category heading */}
              <div className="flex items-center gap-2 mb-5">
                <span style={{ color: 'var(--accent)', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: '1rem' }}>#</span>
                <h3 className="font-bold text-sm tracking-wide" style={{ color: 'var(--text)' }}>{cat.name}</h3>
              </div>

              {/* Items grid — single col on mobile, 2 col on sm, 3 col on lg */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
              >
                {cat.items.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.04, y: -2 }}
                    transition={{ type: 'spring', stiffness: 350 }}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl cursor-default min-w-0"
                    style={{
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border)',
                      transition: 'border-color 0.2s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(200,96,42,0.3)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)' }}
                  >
                    {item.icon ? (
                      <i className={`${item.icon} text-lg shrink-0`} style={{ fontSize: '1.1rem', lineHeight: 1 }} />
                    ) : (
                      <span className="shrink-0" style={{ fontSize: '1.05rem', lineHeight: 1 }}>{item.emoji}</span>
                    )}
                    <span className="text-xs font-medium leading-tight break-words min-w-0" style={{ color: 'var(--text-muted)' }}>
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
