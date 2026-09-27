import { LazyMotion, domAnimation } from 'motion/react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <Nav />
      <Hero />
    </LazyMotion>
  )
}