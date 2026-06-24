import { ThemeProvider } from '@/context/ThemeContext'
import Navbar      from '@/components/Navbar'
import Hero        from '@/components/Hero'
import About       from '@/components/About'
import TechArsenal from '@/components/TechArsenal'
import Experience  from '@/components/Experience'
import Education   from '@/components/Education'
import Research    from '@/components/Research'
import Projects    from '@/components/Projects'
import Music       from '@/components/Music'
import Contact     from '@/components/Contact'
import Footer      from '@/components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ minHeight: '100vh', width: '100%', background: 'var(--bg)', color: 'var(--text)' }}>
        <Navbar />
        <main style={{ width: '100%' }}>
          <Hero />
          <About />
          <TechArsenal />
          <Experience />
          <Education />
          <Research />
          <Projects />
          <Music />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
