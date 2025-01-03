'use client'

import { useTranslations } from 'next-intl'
import React from 'react'
import { motion } from 'framer-motion'

const AboutBanner = () => {
  const t = useTranslations('about')

  return (
    <div className="relative bg-no-repeat bg-cover bg-center h-[50vh] min-h-[400px] overflow-hidden mt-14">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/about/cover.webp')" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-black z-10 px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg"
          >
            {t('t1')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow"
          >
            {t('t2')}
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full -translate-x-16 -translate-y-16 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary/20 rounded-full translate-x-20 translate-y-20 blur-3xl" />
    </div>
  )
}

export default AboutBanner

