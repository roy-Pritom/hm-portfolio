'use client'

import { useEffect,  useState } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { useTranslations } from 'next-intl'

export default function Progress() {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  const t=useTranslations('progress');

  useEffect(() => {
    let startTime: number
    let animationFrameId: number

    if (inView) {
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = timestamp - startTime
        const duration = 2000 // 2 seconds

        // Easing function for smooth animation
        const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4)
        
        const progressRatio = Math.min(progress / duration, 1)
        const easedProgress = easeOutQuart(progressRatio)
        
        setCount(Math.floor(easedProgress * 13))

        if (progress < duration) {
          animationFrameId = requestAnimationFrame(animate)
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [inView])

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Years Section */}
        <div ref={ref} className="bg-red-600 text-white p-8 md:p-12 flex flex-col items-center justify-center min-h-[300px] group">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold mb-4 transition-transform duration-500 ease-out transform group-hover:scale-110">
              {count} {t('year')}
            </div>
            <p className="text-lg md:text-xl opacity-90">
              {t('subtitle')}
            </p>
          </div>
        </div>

        {/* First Image */}
        <div className="relative min-h-[300px] overflow-hidden">
          <Image
            src="/progress.webp"
            alt="Business consultation"
            fill
            className="object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>

        {/* Tips Section */}
        <div className="bg-zinc-900 text-white p-8 md:p-12 flex flex-col items-center justify-center min-h-[300px] group">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold mb-4 transition-transform duration-500 ease-out transform group-hover:scale-110">
              {t('title')}
            </div>
            <p className="text-lg md:text-xl opacity-90">
            {t('subtitle')}
            </p>
          </div>
        </div>

        {/* Second Image */}
        <div className="relative min-h-[300px] overflow-hidden">
          <Image
            src="/progress2.webp"
            alt="Document signing"
            fill
            className="object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
      </div>
    </div>
  )
}

