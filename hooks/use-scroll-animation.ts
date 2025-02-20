"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

export function useScrollAnimation(threshold = 0.1) {
  const [hasAnimated, setHasAnimated] = useState(false)
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [inView, hasAnimated])

  return { ref, hasAnimated, inView }
} 