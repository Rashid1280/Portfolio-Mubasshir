import { Hero } from '../components/Hero'
import { ProjectGrid } from '../components/ProjectGrid'
import { Skills } from '../components/Skills'
import { Experience } from '../components/Experience'
import { Contact } from '../components/Contact'
import { BottomNav } from '../components/BottomNav'
import { useHomeMeta } from '../hooks/useDocumentMeta'

export function Home() {
  useHomeMeta()

  return (
    <>
      <Hero />
      <ProjectGrid />
      <Skills />
      <Experience />
      <Contact />
      <BottomNav />
    </>
  )
}