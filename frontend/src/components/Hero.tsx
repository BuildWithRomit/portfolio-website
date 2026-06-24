import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Mail, FileText } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { stats, socials, contactEmail, resumeUrl } from '@/data/portfolio'
import profilePhoto from '@/assets/profile.jpeg'

const ROLES = [
  'Full Stack AI Engineer',
  'Voice AI Architect',
  'Backend Engineer',
  'LLM Systems Builder',
]

function SocialIcon({ icon }: { icon: string }) {
  if (icon === 'github')   return <GithubIcon size={17} />
  if (icon === 'linkedin') return <LinkedinIcon size={17} />
  return (
    <svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

export default function Hero() {
  const [idx, setIdx]       = useState(0)
  const [text, setText]     = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const target = ROLES[idx]
    let t: ReturnType<typeof setTimeout>
    if (typing) {
      if (text.length < target.length) {
        t = setTimeout(() => setText(target.slice(0, text.length + 1)), 60)
      } else {
        t = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(text.slice(0, -1)), 35)
      } else {
        setIdx((i) => (i + 1) % ROLES.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(t)
  }, [text, typing, idx])

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 pt-24 pb-16"
      style={{ background: 'var(--bg)' }}
    >
      {/* Grid lines background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          opacity: 0.4,
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative flex flex-col items-center gap-4 sm:gap-6 text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <motion.span
            className="h-px"
            style={{ background: 'var(--accent)' }}
            initial={{ width: 0 }}
            animate={{ width: 32 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <span
            className="text-xs font-bold tracking-[0.18em] uppercase"
            style={{ color: 'var(--accent)', fontFamily: "'JetBrains Mono', monospace" }}
          >
            Software Dev Engineer
          </span>
          <motion.span
            className="h-px"
            style={{ background: 'var(--accent)' }}
            initial={{ width: 0 }}
            animate={{ width: 32 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        {/* Circle photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.25, 0, 0, 1] }}
        >
          <div
            style={{
              width: 'clamp(160px, 55vw, 240px)',
              aspectRatio: '1/1',
              borderRadius: '9999px',
              overflow: 'hidden',
              border: '2px solid var(--border)',
              backgroundImage: `url(${profilePhoto})`,
              backgroundSize: '150%',
              backgroundPosition: 'center 5%',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-black leading-none tracking-tight"
          style={{ fontSize: 'clamp(2rem, 8vw, 5rem)', color: 'var(--text)', letterSpacing: '-0.03em' }}
        >
          Romit{' '}
          <span style={{ color: 'var(--accent)' }}>Pal</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center justify-center gap-2 min-h-[1.5rem]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <span style={{ color: 'var(--accent)', fontSize: '0.85rem' }}>▸</span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{text}</span>
          <span
            className="inline-block w-0.5 h-4"
            style={{ background: 'var(--accent)', animation: 'blink 1s step-end infinite' }}
          />
        </motion.div>

        {/* Social row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex items-center justify-center gap-2"
        >
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-9 h-9 flex items-center justify-center rounded-lg border transition-all duration-200"
              style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', background: 'var(--bg-card)' }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'rgba(200,96,42,0.4)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
            >
              <SocialIcon icon={s.icon} />
            </motion.a>
          ))}
          <motion.a
            href={`mailto:${contactEmail}`}
            aria-label="Email"
            className="w-9 h-9 flex items-center justify-center rounded-lg border transition-all duration-200"
            style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', background: 'var(--bg-card)' }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'rgba(200,96,42,0.4)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
          >
            <Mail size={17} />
          </motion.a>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline"
          >
            Contact Me
          </button>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FileText size={15} />
            Resume
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 w-full border-t"
          style={{ borderColor: 'var(--border)' }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="flex flex-col items-center gap-0.5"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7 + i * 0.08, type: 'spring', stiffness: 260 }}
            >
              <span className="text-xl font-extrabold tracking-tight" style={{ color: 'var(--accent)', letterSpacing: '-0.03em' }}>
                {s.value}
              </span>
              <span className="text-xs leading-tight text-center" style={{ color: 'var(--text-faint)' }}>
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1"
        style={{ color: 'var(--text-faint)' }}
      >
        <ArrowDown size={14} className="animate-bounce" />
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem' }}>Scroll</span>
      </motion.div>

      <style>{`@keyframes blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }`}</style>
    </section>
  )
}
