'use client'

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface CarouselProps {
  photos: { id: number; src: string; alt: string }[]
  onPhotoClick: (index: number) => void
}

export function ImageCarousel({ photos, onPhotoClick }: CarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-[400px] relative"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {photos.map((photo, index) => (
          <CarouselItem key={photo.id}>
            <div className="p-1">
              <Card className="cursor-pointer" onClick={() => onPhotoClick(index)}>
                <CardContent className="flex items-center justify-center p-0">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={300}
                    height={444}
                    className="w-[800px] h-[444px] object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

