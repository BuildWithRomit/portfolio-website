export default function Footer() {
  return (
    <footer
      className="py-8 px-4 sm:px-8 lg:px-16"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-mono font-black text-sm" style={{ color: 'var(--accent)' }}>&lt;RP /&gt;</span>
        <span className="text-sm text-center sm:text-left" style={{ color: 'var(--text-faint)' }}>
          © {new Date().getFullYear()} Romit Kumar Pal — Built with love &amp; attention
        </span>
        <div className="flex items-center gap-1">
          <span className="inline-block w-2 h-2 rounded-full" style={{ background: '#4ade80', boxShadow: '0 0 6px rgba(74,222,128,0.5)' }} />
          <span className="text-xs" style={{ color: 'var(--text-faint)' }}>Available for work</span>
        </div>
      </div>
    </footer>
  )
}
