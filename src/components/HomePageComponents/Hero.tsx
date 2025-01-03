// "use client"
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { Button } from "../ui/button";
// import { ChevronLeft, ChevronRight } from 'lucide-react'; // Assuming you're using lucide-react for icons

// // List of banner images
// const bannerImagesPath = [
//   '/banner/banner.jpeg',
//   '/banner/banner2.jpeg',
//   '/banner/banner3.jpeg',
//   '/banner/banner4.jpeg',
//   '/banner/banner5.jpeg',
// ];

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImagesPath.length);
//   };

//   const prevImage = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? bannerImagesPath.length - 1 : prevIndex - 1
//     );
//   };

//   useEffect(() => {
//     const intervalId = setInterval(nextImage, 3000);
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[510px] overflow-hidden mt-12 sm:mt-16">
//       <div className="absolute inset-0 transition-all duration-500">
//         <Image
//           src={bannerImagesPath[currentIndex]}
//           layout="fill"
//           objectFit="cover"
//           quality={100}
//           priority={true}
//           alt={`Banner ${currentIndex + 1}`}
//         />
//       </div>

//       <Button
//         onClick={prevImage}
//         className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 sm:p-2 rounded-full transition-all duration-200 ease-in-out hover:scale-110"
//         aria-label="Previous image"
//       >
//         <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
//       </Button>
//       <Button
//         onClick={nextImage}
//         className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 sm:p-2 rounded-full transition-all duration-200 ease-in-out hover:scale-110"
//         aria-label="Next image"
//       >
//         <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
//       </Button>

//       <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
//         {bannerImagesPath.map((_, index) => (
//           <button
//             key={index}
//             className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ease-in-out ${
//               index === currentIndex ? "bg-white" : "bg-gray-400"
//             }`}
//             onClick={() => setCurrentIndex(index)}
//             aria-label={`Go to image ${index + 1}`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Hero;


"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslations } from "next-intl"

// Banner content with titles and descriptions


const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.9,
  }),
}

const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: { 
    y: -20, 
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" }
  }
}

export default function Hero() {
  const [[page, direction], setPage] = useState([0, 0])
  const [isAnimating, setIsAnimating] = useState(false)
  const t = useTranslations("banners");


  const bannerContent = [
    {
      path: '/banner/banner.jpeg',
      title: t('banner.0.title'),
      description:t('banner.0.description')
    },
    {
      path: '/banner/banner2.jpeg',
      title:  t('banner.1.title'),
      description: t('banner.1.description')
    },
    {
      path: '/banner/banner3.jpeg',
      title: t('banner.2.title'),
      description: t('banner.2.description')
    },
    {
      path: '/banner/banner4.jpeg',
      title: t('banner.3.title'),
      description: t('banner.3.description')
    },
    {
      path: '/banner/banner5.jpeg',
      title: t('banner.4.title'),
      description: t('banner.4.description')
    },
  ]

  const imageIndex = Math.abs(page % bannerContent.length)

  const paginate = (newDirection: number) => {
    if (!isAnimating) {
      setPage([page + newDirection, newDirection])
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => paginate(1), 5000)
    return () => clearInterval(intervalId)
  }, [page])

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[510px] overflow-hidden mt-12 sm:mt-16 bg-black">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.4 }
          }}
          className="absolute inset-0"
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          {/* Image with overlay */}
          <div className="relative w-full h-full">
            <Image
              src={bannerContent[imageIndex].path}
              layout="fill"
              objectFit="cover"
              quality={100}
              priority={true}
              alt={`Banner ${imageIndex + 1}`}
              className="brightness-75"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          </div>

          {/* Text content */}
          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center text-white px-4"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.h2 
              variants={textVariants}
              className="text-4xl md:text-6xl font-bold text-center mb-4 text-white drop-shadow-lg"
            >
              {bannerContent[imageIndex].title}
            </motion.h2>
            <motion.p 
              variants={textVariants}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-center text-gray-200"
            >
              {bannerContent[imageIndex].description}
            </motion.p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <Button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110 z-10"
        aria-label="Previous image"
        disabled={isAnimating}
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
      </Button>
      <Button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110 z-10"
        aria-label="Next image"
        disabled={isAnimating}
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
      </Button>

      {/* Progress indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {bannerContent.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setPage([index, index > imageIndex ? 1 : -1])
              }
            }}
            className="group relative h-3 transition-all duration-300"
          >
            <motion.div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === imageIndex 
                  ? "bg-white w-8" 
                  : "bg-white/50 group-hover:bg-white/75"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
            {index === imageIndex && (
              <motion.div
                className="absolute inset-0 rounded-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}


