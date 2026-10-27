import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { LazyMotion, domAnimation } from 'motion/react'
import { Nav } from './components/Nav'
import { Home } from './pages/Home'
import { CaseStudy } from './pages/CaseStudy'

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <ScrollBehaviour />

      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </LazyMotion>
  )
}

function ScrollBehaviour() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}