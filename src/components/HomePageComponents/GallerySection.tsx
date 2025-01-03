"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
// import { Heart } from 'lucide-react';

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
];

export default function GallerySection() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const t=useTranslations('gallery');
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
    <div className="container mx-auto  py-10  ">
      <p className="lg:text-3xl md:text-[22px] text-xl font-bold text-red-600 mb-3 text-center">
        {t('title')}
      </p>

      <div className="flex justify-center mb-4">
        <Button
          onClick={() => setShowFavorites(!showFavorites)}
          variant={showFavorites ? "default" : "outline"}
          className="mr-2"
        >
          {showFavorites ? t("btn") : t('Favorites') }
        </Button>
      </div>

      {/* <div className="col-span-5">
            <ImageCarousel photos={photos} onPhotoClick={handlePhotoClick} />
          </div> */}
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-4 ">
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
      <div className="flex justify-center items-center mt-4">
        <Link href='/gallery'>
          <Button className="bg-primaryColor">{t("btn")}</Button>
        </Link>
      </div>
    </div>
  );
}
