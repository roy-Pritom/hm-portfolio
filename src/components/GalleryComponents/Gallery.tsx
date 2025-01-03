'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from "@/components/ui/button"
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react'
// import { ImageCarousel } from './ImageCarousel'


interface Photo {
  id: number
  src: string
  alt: string
}

const photos: Photo[] = [
  { id: 1, src: "/gallery/IMG-20241228-WA0001.jpg", alt: "Photo 1" },
  { id: 2, src: "/gallery/IMG-20241228-WA0002.jpg", alt: "Photo 2" },
  { id: 3, src: "/gallery/IMG-20241228-WA0003.jpg", alt: "Photo 3" },
  { id: 4, src: "/gallery/IMG-20241228-WA0004.jpg", alt: "Photo 4" },
  { id: 5, src: "/gallery/IMG-20241228-WA0005.jpg", alt: "Photo 5" },
  { id: 6, src: "/gallery/IMG-20241228-WA0006.jpg", alt: "Photo 6" },
  { id: 7, src: "/gallery/IMG-20241228-WA0007.jpg", alt: "Photo 7" },
  { id: 8, src: "/gallery/IMG-20241228-WA0008.jpg", alt: "Photo 8" },
  { id: 9, src: "/gallery/IMG-20241228-WA0009.jpg", alt: "Photo 9" },
  { id: 10, src: "/gallery/IMG-20241228-WA0010.jpg", alt: "Photo 10" },
  { id: 11, src: "/gallery/IMG-20241228-WA0011.jpg", alt: "Photo 11" },
  { id: 12, src: "/gallery/IMG-20241228-WA0012.jpg", alt: "Photo 12" },
  { id: 13, src: "/gallery/IMG-20241228-WA0013.jpg", alt: "Photo 13" },
  { id: 14, src: "/gallery/IMG-20241228-WA0014.jpg", alt: "Photo 14" },
  { id: 15, src: "/gallery/IMG-20241228-WA0015.jpg", alt: "Photo 15" },
  { id: 16, src: "/gallery/IMG-20241228-WA0016.jpg", alt: "Photo 16" },
  { id: 17, src: "/gallery/IMG-20241228-WA0017.jpg", alt: "Photo 17" },
  { id: 18, src: "/gallery/IMG-20241228-WA0018.jpg", alt: "Photo 18" },
  { id: 19, src: "/gallery/IMG-20241228-WA0019.jpg", alt: "Photo 19" },
  { id: 20, src: "/gallery/IMG-20241228-WA0020.jpg", alt: "Photo 20" },
  { id: 21, src: "/gallery/IMG-20241228-WA0021.jpg", alt: "Photo 21" },
  { id: 22, src: "/gallery/IMG-20241228-WA0022.jpg", alt: "Photo 22" },
  { id: 23, src: "/gallery/IMG-20241228-WA0023.jpg", alt: "Photo 23" },
  { id: 24, src: "/gallery/IMG-20241228-WA0024.jpg", alt: "Photo 24" },
  { id: 25, src: "/gallery/IMG-20241228-WA0025.jpg", alt: "Photo 25" },
  { id: 26, src: "/gallery/IMG-20241228-WA0026.jpg", alt: "Photo 26" },
  { id: 27, src: "/gallery/IMG-20241228-WA0027.jpg", alt: "Photo 27" },
  { id: 28, src: "/gallery/IMG-20241228-WA0028.jpg", alt: "Photo 28" },
  { id: 29, src: "/gallery/IMG-20241228-WA0029.jpg", alt: "Photo 29" },
  { id: 30, src: "/gallery/IMG-20241228-WA0030.jpg", alt: "Photo 30" },
  { id: 31, src: "/gallery/IMG-20241230-WA0003.jpg", alt: "Photo 31" },
  { id: 32, src: "/gallery/IMG-20241230-WA0004.jpg", alt: "Photo 32" },
  { id: 33, src: "/gallery/IMG-20241230-WA0005.jpg", alt: "Photo 33" },
  { id: 34, src: "/gallery/IMG-20241230-WA0006.jpg", alt: "Photo 34" },
  { id: 35, src: "/gallery/IMG-20241230-WA0007.jpg", alt: "Photo 35" },
  { id: 36, src: "/gallery/IMG-20241230-WA0008.jpg", alt: "Photo 36" },
  { id: 37, src: "/gallery/IMG-20241230-WA0009.jpg", alt: "Photo 37" },
  { id: 38, src: "/gallery/IMG-20241230-WA0010.jpg", alt: "Photo 38" },
  { id: 39, src: "/gallery/IMG-20241230-WA0011.jpg", alt: "Photo 39" },
  { id: 40, src: "/gallery/IMG-20241230-WA0012.jpg", alt: "Photo 40" },
  { id: 41, src: "/gallery/IMG-20241230-WA0013.jpg", alt: "Photo 41" },
  { id: 42, src: "/gallery/IMG-20241230-WA0014.jpg", alt: "Photo 42" },
  { id: 43, src: "/gallery/IMG-20241230-WA0015.jpg", alt: "Photo 43" },

];



export default function Gallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null)
  const [favorites, setFavorites] = useState<number[]>([])
  const [showFavorites, setShowFavorites] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites')
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    )
  }

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (selectedPhotoIndex === null) return
    const newIndex = direction === 'prev' 
      ? (selectedPhotoIndex - 1 + photos.length) % photos.length 
      : (selectedPhotoIndex + 1) % photos.length
    setSelectedPhotoIndex(newIndex)
  }

  const displayedPhotos = showFavorites ? photos.filter(photo => favorites.includes(photo.id)) : photos

  const handlePhotoClick = (index: number) => {
    setSelectedPhotoIndex(index)
    setIsDialogOpen(true)
  }

  return (
    <div className="container mx-auto  py-8 bg-gray-100 ">
        {/* <div className="">

          <ImageCarousel photos={photos} onPhotoClick={handlePhotoClick} />
        </div> */}

      <div className="flex justify-center mb-4">
        <Button 
          onClick={() => setShowFavorites(!showFavorites)}
          variant={showFavorites ? "default" : "outline"}
          className="mr-2"
        >
          {showFavorites ? "All Photos" : "Favorites"}
        </Button>
      </div>

        {/* <div className="col-span-5">
          <ImageCarousel photos={photos} onPhotoClick={handlePhotoClick} />
        </div> */}
        <div className=" grid grid-cols-2 sm:grid-cols-5 gap-4 ">
          {displayedPhotos.map((photo, index) => (
            <Card key={photo.id} className="overflow-hidden cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105">
              <CardContent className="p-0 relative">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={300}
                  height={300}
                  className="w-full xl:h-[210px] h-full object-cover"
                  onClick={() => handlePhotoClick(index)}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleFavorite(photo.id)
                  }}
                >
                  <Heart className={`h-4 w-4 ${favorites.includes(photo.id) ? 'fill-red-500 text-red-500' : 'text-gray-500'}`} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl w-full p-0 bg-black border-none">
          <div className="relative border-none">
            <Image
              src={photos[selectedPhotoIndex || 0]?.src}
              alt={photos[selectedPhotoIndex || 0]?.alt}
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-md border-none"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 left-4 bg-white/80 hover:bg-white"
              onClick={() => toggleFavorite(photos[selectedPhotoIndex || 0].id)}
            >
              <Heart className={`h-6 w-6 ${favorites.includes(photos[selectedPhotoIndex || 0].id) ? 'fill-red-500 text-red-500' : 'text-gray-500'}`} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={() => navigatePhoto('prev')}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={() => navigatePhoto('next')}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

