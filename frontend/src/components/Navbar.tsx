import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { resumeUrl } from '@/data/portfolio'

const NAV_LINKS = [
  { label: 'About',      href: 'about'      },
  { label: 'Stack',      href: 'tech'       },
  { label: 'Experience', href: 'experience' },
  { label: 'Education',  href: 'education'  },
  { label: 'Research',   href: 'research'   },
  { label: 'Projects',   href: 'projects'   },
  { label: 'Music',      href: 'music'      },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useScrollSpy(['about', 'experience', 'education', 'research', 'projects', 'music', 'contact'])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full overflow-hidden"
        style={{
          background: scrolled ? 'var(--bg-card)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono font-black text-sm tracking-tight shrink-0 transition-opacity hover:opacity-70"
            style={{ color: 'var(--accent)', letterSpacing: '-0.01em' }}
          >
            &lt;RP /&gt;
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <div key={link.href} className="relative">
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-sm font-medium transition-colors duration-200 pb-0.5 overflow-hidden"
                  style={{
                    color: active === link.href ? 'var(--accent)' : 'var(--text-muted)',
                    letterSpacing: '0.01em',
                  }}
                >
                  {link.label}
                </button>
                {active === link.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute left-0 right-0 bottom-[-2px] h-px"
                    style={{ background: 'var(--accent)' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={toggle}
              className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200"
              style={{ color: 'var(--text-muted)' }}
              aria-label="Toggle theme"
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm flex items-center gap-1.5"
              style={{ padding: '8px 16px' }}
            >
              <FileText size={14} /> Resume
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary text-sm"
              style={{ padding: '8px 20px' }}
            >
              Contact
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2 shrink-0">
            <button
              onClick={toggle}
              className="w-8 h-8 flex items-center justify-center rounded-lg"
              style={{ color: 'var(--text-muted)' }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              className="w-8 h-8 flex items-center justify-center"
              style={{ color: 'var(--text-muted)' }}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu — full viewport width, no overflow */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden w-full overflow-hidden"
            style={{
              background: 'var(--bg-card)',
              borderBottom: '1px solid var(--border)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <div className="px-4 py-5 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-sm font-medium px-3 py-2.5 rounded-lg transition-colors w-full overflow-hidden"
                  style={{
                    color: active === link.href ? 'var(--accent)' : 'var(--text)',
                    background: active === link.href ? 'var(--accent-dim)' : 'transparent',
                  }}
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-2 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                <button
                  onClick={() => scrollTo('contact')}
                  className="btn-primary text-sm w-full justify-center"
                >
                  Contact
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
