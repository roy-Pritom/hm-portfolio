"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function AnimateAgency() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut"
      }
    }
  }

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="w-full container mx-auto p-4 mt-8">
      <div className="relative">
        {/* Main Logo Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-6 md:gap-12 bg-white rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-500"
        >
          {/* SVG Logo */}
          <motion.div
            className="w-48 h-48 md:w-64 md:h-64 relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Outer Circle */}
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                stroke="#8B0000"
                strokeWidth="2"
                fill="none"
                variants={pathVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              />
              
              {/* Swoosh Elements */}
              <motion.path
                d="M 30 50 Q 50 20 70 50"
                stroke="#FF0000"
                strokeWidth="3"
                fill="none"
                variants={pathVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              />
              <motion.path
                d="M 25 50 Q 50 80 75 50"
                stroke="#8B0000"
                strokeWidth="3"
                fill="none"
                variants={pathVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              />
            </svg>
          </motion.div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <motion.h1
              variants={textVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="text-4xl md:text-6xl font-bold mb-2"
            >
              <span className="text-red-500">HM Angel</span>
            </motion.h1>
            
            <motion.h2
              variants={textVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              <span className="text-red-500">Overseas</span>
            </motion.h2>
            
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-4xl font-bold text-maroon-800 mb-4"
            >
              RL 2129
            </motion.div>
            
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ delay: 0.6 }}
              className="inline-block bg-gray-200 px-4 py-2 rounded-full"
            >
              <span className="text-gray-600 text-lg md:text-xl">
                Recruiting Agency
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Small Logo Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="w-32 h-32 bg-white rounded-lg shadow-lg p-4 mx-auto mt-8 hover:shadow-xl transition-shadow duration-300"
        >
          <motion.div
            className="w-full h-full"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="45" stroke="#8B0000" strokeWidth="2" fill="none" />
              <path d="M 30 50 Q 50 20 70 50" stroke="#FF0000" strokeWidth="3" fill="none" />
              <path d="M 25 50 Q 50 80 75 50" stroke="#8B0000" strokeWidth="3" fill="none" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

