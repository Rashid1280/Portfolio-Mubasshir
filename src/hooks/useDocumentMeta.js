import { useEffect } from 'react'
import { site } from '../data/site'

export function useDocumentMeta({ title, description }) {
  useEffect(() => {
    const previousTitle = document.title
    if (title) document.title = title

    const tag = document.querySelector('meta[name="description"]')
    const previousDescription = tag?.getAttribute('content')
    if (tag && description) tag.setAttribute('content', description)

    return () => {
      document.title = previousTitle
      if (tag && previousDescription) tag.setAttribute('content', previousDescription)
    }
  }, [title, description])
}

export function useHomeMeta() {
  useDocumentMeta({
    title: site.meta.title,
    description: site.meta.description,
  })
}