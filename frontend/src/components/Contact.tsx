import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, CheckCircle, AlertCircle, Code } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { contactEmail, socials } from '@/data/portfolio'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  ?? ''
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? ''
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  ?? ''

type Status = 'idle' | 'loading' | 'success' | 'error'

function SocialIconEl({ icon }: { icon: string }) {
  if (icon === 'github')   return <GithubIcon size={17} />
  if (icon === 'linkedin') return <LinkedinIcon size={17} />
  return <Code size={17} />
}

const CONNECT = [
  { label: 'Email', sub: contactEmail, icon: 'email', href: `mailto:${contactEmail}` },
  ...socials.map((s) => ({ label: s.label, sub: '', icon: s.icon, href: s.url })),
]

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('loading')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, { publicKey: PUBLIC_KEY })
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto w-full">
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
            <span className="section-eyebrow-num">08 — Contact</span>
            <motion.span
              className="section-eyebrow-line"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
          <h2 className="section-title">Let&apos;s Build Something</h2>
          <p className="section-sub">Open to collaborating on challenging backend or AI projects</p>
        </motion.div>

        {/* Form: 1-col on mobile/tablet, 2-col on lg+ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-5 sm:p-6 w-full"
          >
            <form ref={formRef} onSubmit={submit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-2 tracking-wide uppercase" style={{ color: 'var(--text-faint)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.08em' }}>Name</label>
                <input name="name" value={form.name} onChange={change} placeholder="Your name" required className="form-input" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-2 tracking-wide uppercase" style={{ color: 'var(--text-faint)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.08em' }}>Email</label>
                <input type="email" name="email" value={form.email} onChange={change} placeholder="your@email.com" required className="form-input" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-2 tracking-wide uppercase" style={{ color: 'var(--text-faint)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.08em' }}>Subject</label>
                <input name="subject" value={form.subject} onChange={change} placeholder="What's this about?" className="form-input" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-2 tracking-wide uppercase" style={{ color: 'var(--text-faint)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.08em' }}>Message</label>
                <textarea name="message" value={form.message} onChange={change} placeholder="Your message..." rows={5} required className="form-input" />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-sm p-3 rounded-xl" style={{ background: 'rgba(74,222,128,0.08)', color: '#4ade80', border: '1px solid rgba(74,222,128,0.2)' }}>
                  <CheckCircle size={15} className="shrink-0" /> Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-sm p-3 rounded-xl" style={{ background: 'rgba(239,68,68,0.08)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.2)' }}>
                  <AlertCircle size={15} className="shrink-0" /> Something went wrong. Email me directly.
                </div>
              )}

              <button type="submit" disabled={status === 'loading'} className="btn-primary w-full justify-center">
                {status === 'loading'
                  ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  : <Send size={15} />}
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4 w-full"
          >
            <div className="card p-5 sm:p-6 flex-1">
              <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: 'var(--text-faint)', fontFamily: "'JetBrains Mono', monospace" }}>Connect</p>
              <div className="flex flex-col gap-4">
                {CONNECT.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-white transition-all duration-200 group-hover:scale-105"
                      style={{ background: 'var(--accent)' }}
                    >
                      {c.icon === 'email'     ? <Mail size={15} />
                      : c.icon === 'github'   ? <GithubIcon size={15} />
                      : c.icon === 'linkedin' ? <LinkedinIcon size={15} />
                      : <SocialIconEl icon={c.icon} />}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold transition-colors group-hover:text-[var(--accent)]" style={{ color: 'var(--text)' }}>{c.label}</p>
                      {c.sub && <p className="text-xs truncate" style={{ color: 'var(--text-muted)' }}>{c.sub}</p>}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="card p-5 sm:p-6">
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--text-faint)', fontFamily: "'JetBrains Mono', monospace" }}>Location</p>
              <div className="flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
                <MapPin size={15} className="shrink-0" style={{ color: 'var(--accent)' }} />
                <span className="text-sm">Kolkata, West Bengal, India</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
