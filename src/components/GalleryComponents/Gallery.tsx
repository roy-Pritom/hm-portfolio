"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { officePhotos, clientPhotos } from "@/constants/data";

interface Photo {
  id: number;
  src: string;
  alt: string;
}

export default function Gallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("office");

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
    const currentPhotos = getPhotosForActiveTab();
    const newIndex =
      direction === "prev"
        ? (selectedPhotoIndex - 1 + currentPhotos.length) % currentPhotos.length
        : (selectedPhotoIndex + 1) % currentPhotos.length;
    setSelectedPhotoIndex(newIndex);
  };

  const handlePhotoClick = (index: number) => {
    setSelectedPhotoIndex(index);
    setIsDialogOpen(true);
  };

  const getPhotosForActiveTab = (): Photo[] => {
    switch (activeTab) {
      case "office":
        return officePhotos;
      case "clients":
        return clientPhotos;
      case "favorites":
        return [...officePhotos, ...clientPhotos].filter((photo) =>
          favorites.includes(photo.id)
        );
      default:
        return [];
    }
  };

  const renderPhotoGrid = (photos: Photo[]) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {photos?.length ? (
        photos.map((photo, index) => (
          <Card
            key={photo.id}
            className="overflow-hidden cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105"
          >
            <CardContent className="p-0 relative">
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
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
        ))
      ) : (

          <div className="flex items-center justify-center h-40 bg-gray-100 rounded-lg ">
            <p className="text-gray-500 text-lg font-medium text-center">
              ❌ No favorites selected
            </p>
          </div>
        
      )}
    </div>
  );

  return (
    <div className="container mx-auto py-8 bg-gray-100">
      <Tabs
        defaultValue="clients"
        onValueChange={(value) => setActiveTab(value)}
      >
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger
            value="office"
            className="border bg-white px-4 py-2 rounded-lg font-medium text-gray-700 
              hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-500 hover:text-white 
              transition-all duration-300 ease-in-out shadow-sm"
          >
            🏢 Office Photos
          </TabsTrigger>
          <TabsTrigger
            value="clients"
            className="border bg-white px-4 py-2 rounded-lg font-medium text-gray-700 
              hover:bg-gradient-to-r hover:from-green-400 hover:to-green-500 hover:text-white 
              transition-all duration-300 ease-in-out shadow-sm mx-3"
          >
            😊 Happy Clients
          </TabsTrigger>
          <TabsTrigger
            value="favorites"
            className="border bg-white px-4 py-2 rounded-lg font-medium text-gray-700 
              hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-500 hover:text-white 
              transition-all duration-300 ease-in-out shadow-sm"
          >
            ⭐ Favorites
          </TabsTrigger>
        </TabsList>

        <TabsContent value="office">
          {renderPhotoGrid(officePhotos)}
        </TabsContent>
        <TabsContent value="clients">
          {renderPhotoGrid(clientPhotos)}
        </TabsContent>
        <TabsContent value="favorites">
          {renderPhotoGrid(getPhotosForActiveTab())}
        </TabsContent>
      </Tabs>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl w-full p-0 bg-black border-none">
          <div className="relative border-none">
            {selectedPhotoIndex !== null && (
              <Image
                src={
                  getPhotosForActiveTab()[selectedPhotoIndex]?.src ||
                  "/placeholder.svg"
                }
                alt={getPhotosForActiveTab()[selectedPhotoIndex]?.alt}
                width={1200}
                height={800}
                className="w-full h-auto object-contain rounded-md border-none"
              />
            )}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 left-4 bg-white/80 hover:bg-white"
              onClick={() =>
                selectedPhotoIndex !== null &&
                toggleFavorite(getPhotosForActiveTab()[selectedPhotoIndex].id)
              }
            >
              <Heart
                className={`h-6 w-6 ${
                  selectedPhotoIndex !== null &&
                  favorites.includes(
                    getPhotosForActiveTab()[selectedPhotoIndex].id
                  )
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
