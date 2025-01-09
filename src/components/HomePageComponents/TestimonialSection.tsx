'use client'

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Quote, Star } from 'lucide-react'
// import Image from "next/image"
import { motion } from 'framer-motion';

interface TestimonialProps {
  category: string
  quote: string
  author: string
  role: string
  rating?: number
  image: string
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300 fill-gray-300"
          }`}
        />
      ))}
      <span className="ml-2 text-lg font-semibold">{rating}</span>
    </div>
  )
}

export default function Testimonial({ category, quote, author, role, rating, image }: TestimonialProps) {
  return (
    <Card className="relative overflow-hidden group bh h-[280px]">
      <CardHeader className="space-y-3">
        <div className="text-sm font-medium text-gray-500 tracking-wide">
          {category}
        </div>
        <div className="relative">
          <p className="text-base font-thin leading-snug text-gray-900">
            {quote}
          </p>
          <span className="absolute  top-24 right-0 text-8xl font-serif text-gray-900">
          <Quote fill="black" />
          </span>
        </div>
        {rating && <StarRating rating={rating} />}
      </CardHeader>
      <CardContent className="flex items-center gap-3 pt-3">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          {/* <Image
            src={image}
            alt={author}
            fill
            className="object-cover"
          /> */}
           <motion.img
          src={image}
          alt={`${name}'s avatar`}
          className="w-12 h-12 rounded-full mr-4 object-cover"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
        />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{author}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </CardContent>
    </Card>
  )
}

//  function TestimonialSection() {
//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="grid md:grid-cols-2 gap-6">
//         <Testimonial
//           category="NEW VISIT BY MEDICAL CENTER"
//           quote="The cosmetician isn't just about enhancing beauty, but crafting confidence."
//           author="Jenna Milton"
//           role="Visit Cosmetician"
//           image="/placeholder.svg?height=100&width=100"
//         />
//         <Testimonial
//           category="MEDICAL CENTER PATIENT"
//           quote="In the realm of care, my doctor here isn't just a practitioner; they're a guardian of health."
//           author="Maria Reed"
//           role="Visit Female Doctor - Dr. Nillo Millana"
//           rating={4.2}
//           image="/placeholder.svg?height=100&width=100"
//         />
//       </div>
//     </div>
//   )
// }

