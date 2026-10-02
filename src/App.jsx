import { LazyMotion, domAnimation } from 'motion/react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { ProjectGrid } from './components/ProjectGrid'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <Nav />
      <Hero />
      <ProjectGrid />
      <Skills />
      <Experience />
      <Contact />
    </LazyMotion>
  )
}