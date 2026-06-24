import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause } from 'lucide-react'
import { music } from '@/data/portfolio'

export default function Music() {
  const [currentIdx, setCurrentIdx] = useState<number | null>(null)
  const iframeRefs = useRef<(HTMLIFrameElement | null)[]>([])

  const toggleTrack = (idx: number) => {
    if (currentIdx === idx) {
      // Pause: blank out this iframe and hide it
      if (iframeRefs.current[idx]) iframeRefs.current[idx]!.src = 'about:blank'
      setCurrentIdx(null)
    } else {
      // Stop previous
      if (currentIdx !== null && iframeRefs.current[currentIdx]) {
        iframeRefs.current[currentIdx]!.src = 'about:blank'
      }
      // Set src synchronously within the click event to preserve user-gesture for autoplay
      if (iframeRefs.current[idx]) {
        iframeRefs.current[idx]!.src = `https://open.spotify.com/embed/track/${music[idx].spotifyId}?utm_source=generator&autoplay=1`
      }
      setCurrentIdx(idx)
    }
  }

  return (
    <section id="music" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16" style={{ background: 'var(--bg-subtle)' }}>
      <div className="max-w-xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="section-eyebrow">
            <span className="section-eyebrow-line" />
            <span className="section-eyebrow-num">07 — Music</span>
            <span className="section-eyebrow-line" />
          </div>
          <h2 className="section-title">Music I Vibe To</h2>
          <p className="section-sub">Listen while you scroll</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="card overflow-hidden w-full"
        >
          {music.map((track, i) => {
            const isActive = currentIdx === i
            return (
              <div
                key={track.spotifyId}
                style={{ borderBottom: i < music.length - 1 ? '1px solid var(--border)' : 'none' }}
              >
                {/* Track row */}
                <div
                  className="flex items-center gap-3 px-4 sm:px-5 py-3"
                  style={{ background: isActive ? 'rgba(200,96,42,0.05)' : 'transparent' }}
                >
                  <button
                    onClick={() => toggleTrack(i)}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0 transition-transform hover:scale-105 active:scale-95"
                    style={{ background: 'var(--accent)', boxShadow: isActive ? '0 2px 12px rgba(200,96,42,0.35)' : 'none' }}
                    aria-label={isActive ? 'Pause' : 'Play'}
                  >
                    {isActive
                      ? <Pause size={13} fill="currentColor" />
                      : <Play size={13} fill="currentColor" className="ml-0.5" />}
                  </button>

                  {/* Title + artist: truncate to prevent overflow */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm truncate" style={{ color: isActive ? 'var(--accent)' : 'var(--text)' }}>
                      {track.title}
                    </p>
                    <p className="text-xs truncate" style={{ color: 'var(--text-muted)' }}>{track.artist}</p>
                  </div>

                  <span className="text-xs shrink-0 font-mono" style={{ color: 'var(--text-faint)', fontFamily: "'JetBrains Mono', monospace" }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Iframe always in DOM — src set via ref to preserve user-gesture context */}
                <div style={{ height: isActive ? 80 : 0, overflow: 'hidden', transition: 'height 0.3s ease' }}>
                  <iframe
                    ref={el => { iframeRefs.current[i] = el }}
                    src="about:blank"
                    width="100%"
                    height="80"
                    style={{ border: 'none' }}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    title={`Spotify – ${track.title}`}
                  />
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
