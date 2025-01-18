"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
// import { ImageCarousel } from './ImageCarousel'

interface Photo {
  id: number;
  src: string;
  alt: string;
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
  { id: 44, src: "/gallery/1.JPG", alt: "Photo 44" },
  { id: 45, src: "/gallery/2.JPG", alt: "Photo 45" },
  { id: 46, src: "/gallery/3.JPG", alt: "Photo 46" },
  { id: 47, src: "/gallery/4.JPG", alt: "Photo 47" },
  { id: 48, src: "/gallery/5.JPG", alt: "Photo 48" },
  { id: 49, src: "/gallery/6.JPG", alt: "Photo 49" },
  { id: 50, src: "/gallery/7.JPG", alt: "Photo 50" },
  { id: 51, src: "/gallery/8.JPG", alt: "Photo 51" },
  { id: 52, src: "/gallery/9.JPG", alt: "Photo 52" },
  { id: 53, src: "/gallery/10.JPG", alt: "Photo 53" },
  { id: 54, src: "/gallery/11.JPG", alt: "Photo 54" },
  { id: 55, src: "/gallery/12.JPG", alt: "Photo 55" },
  { id: 56, src: "/gallery/13.JPG", alt: "Photo 56" },
  { id: 57, src: "/gallery/14.JPG", alt: "Photo 57" },
  { id: 58, src: "/gallery/15.JPG", alt: "Photo 58" },
  { id: 59, src: "/gallery/16.JPG", alt: "Photo 59" },
  { id: 60, src: "/gallery/17.JPG", alt: "Photo 60" },
  { id: 61, src: "/gallery/18.JPG", alt: "Photo 61" },
  { id: 62, src: "/gallery/19.JPG", alt: "Photo 62" },
  { id: 63, src: "/gallery/20.JPG", alt: "Photo 63" },
  { id: 64, src: "/gallery/21.JPG", alt: "Photo 64" },
  { id: 65, src: "/gallery/22.JPG", alt: "Photo 65" },
  { id: 66, src: "/gallery/23.JPG", alt: "Photo 66" },
  { id: 67, src: "/gallery/24.JPG", alt: "Photo 67" },
  { id: 68, src: "/gallery/25.JPG", alt: "Photo 68" },
  { id: 69, src: "/gallery/26.JPG", alt: "Photo 69" },
  { id: 70, src: "/gallery/27.JPG", alt: "Photo 70" },
  { id: 71, src: "/gallery/28.JPG", alt: "Photo 71" },
  { id: 72, src: "/gallery/29.JPG", alt: "Photo 72" },
  { id: 73, src: "/gallery/30.JPG", alt: "Photo 73" },
  { id: 74, src: "/gallery/31.JPG", alt: "Photo 74" },
  { id: 75, src: "/gallery/32.JPG", alt: "Photo 75" },
  { id: 76, src: "/gallery/33.JPG", alt: "Photo 76" },
  { id: 77, src: "/gallery/34.JPG", alt: "Photo 77" },
  { id: 78, src: "/gallery/35.JPG", alt: "Photo 78" },
  { id: 79, src: "/gallery/36.JPG", alt: "Photo 79" },
  { id: 80, src: "/gallery/37.JPG", alt: "Photo 80" },
  { id: 81, src: "/gallery/38.JPG", alt: "Photo 81" },
  { id: 82, src: "/gallery/39.JPG", alt: "Photo 82" },
  { id: 83, src: "/gallery/40.JPG", alt: "Photo 83" },
  { id: 84, src: "/gallery/41.JPG", alt: "Photo 84" },
  { id: 85, src: "/gallery/42.jpg", alt: "Photo 85" },
  { id: 86, src: "/gallery/43.jpg", alt: "Photo 86" },
  { id: 87, src: "/gallery/44.jpg", alt: "Photo 87" },
  { id: 88, src: "/gallery/45.jpg", alt: "Photo 88" },
  { id: 89, src: "/gallery/46.JPG", alt: "Photo 89" },
  { id: 90, src: "/gallery/47.JPG", alt: "Photo 90" },
  { id: 91, src: "/gallery/48.jpg", alt: "Photo 91" },
  { id: 92, src: "/gallery/49.jpg", alt: "Photo 92" },
  { id: 93, src: "/gallery/50.jpg", alt: "Photo 93" },
  { id: 94, src: "/gallery/51.jpg", alt: "Photo 94" },
  { id: 95, src: "/gallery/52.jpg", alt: "Photo 95" },
];

export default function Gallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const navigatePhoto = (direction: "prev" | "next") => {
    if (selectedPhotoIndex === null) return;
    const newIndex =
      direction === "prev"
        ? (selectedPhotoIndex - 1 + photos.length) % photos.length
        : (selectedPhotoIndex + 1) % photos.length;
    setSelectedPhotoIndex(newIndex);
  };

  const displayedPhotos = showFavorites
    ? photos.filter((photo) => favorites.includes(photo.id))
    : photos;

  const handlePhotoClick = (index: number) => {
    setSelectedPhotoIndex(index);
    setIsDialogOpen(true);
  };

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
          <Card
            key={photo.id}
            className="overflow-hidden cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105"
          >
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
                  e.stopPropagation();
                  toggleFavorite(photo.id);
                }}
              >
                <Heart
                  className={`h-4 w-4 ${
                    favorites.includes(photo.id)
                      ? "fill-red-500 text-red-500"
                      : "text-gray-500"
                  }`}
                />
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
              <Heart
                className={`h-6 w-6 ${
                  favorites.includes(photos[selectedPhotoIndex || 0].id)
                    ? "fill-red-500 text-red-500"
                    : "text-gray-500"
                }`}
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={() => navigatePhoto("prev")}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={() => navigatePhoto("next")}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
