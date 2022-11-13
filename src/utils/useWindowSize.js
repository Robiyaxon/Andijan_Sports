import { useEffect, useState } from 'react'

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  }

  useEffect(() => {
    window.addEventListener('resize', changeWindowSize)

    return () => {
      window.removeEventListener('resize', changeWindowSize)
    }
  }, [])

  return windowSize
}
