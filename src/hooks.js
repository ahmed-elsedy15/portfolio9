import { useEffect, useState } from 'react'

export function useMedia(query) {
  const [match, setMatch] = useState(() => (typeof window !== 'undefined' && window.matchMedia ? window.matchMedia(query).matches : false))
  useEffect(() => {
    const mq = window.matchMedia(query)
    const on = () => setMatch(mq.matches)
    on()
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [query])
  return match
}

export const useFinePointer = () => useMedia('(hover: hover) and (pointer: fine) and (min-width: 900px)')

// Respects the Vite `base` (e.g. /portfolio9/) so assets work on GitHub Pages
export const asset = (p) => import.meta.env.BASE_URL + p
