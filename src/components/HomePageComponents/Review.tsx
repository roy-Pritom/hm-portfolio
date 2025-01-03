"use client"
import * as React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import UserReviewCard from "./ReveiwCard"
import { useTranslations } from "next-intl"
export function Review() {
  const autoplay = React.useRef(Autoplay({ delay: 2000 }))
  const t=useTranslations("review")
  const reviews = [
    {
      name: t("0.name"),
      rating: 5,
      review: t("0.review"),
      avatarUrl: "https://i.pravatar.cc/150?img=1"
    },
    {
      name: t("1.name"),
      rating:4,
      review: t("1.review"),
      avatarUrl: "https://i.pravatar.cc/150?img=2"
    },
    {
      name: t("2.name"),
      rating: 3,
      review: t("2.review"),
      avatarUrl: "https://i.pravatar.cc/150?img=3"
    },
    {
      name: t("3.name"),
      rating: 5,
      review: t("3.review"),
      avatarUrl: "https://i.pravatar.cc/150?img=4"
    }
  ]

  return (
    <div className="relative w-full max-w-7xl mx-auto pt-12 px-4 sm:px-6 lg:px-8">
      <Carousel
        className="w-full"
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
          <CarouselContent className="-ml-2 sm:-ml-4">
          {reviews.map((review, index) => (
            <CarouselItem key={index} className="pl-2 sm:pl-4 sm:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <UserReviewCard {...review} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute -left-4 sm:-left-6 top-1/2 transform -translate-y-1/2">
          <CarouselPrevious className="relative left-0" />
        </div>
        <div className="absolute -right-4 sm:-right-6 top-1/2 transform -translate-y-1/2">
          <CarouselNext className="relative right-0" />
        </div>
      </Carousel>
    </div>
  )
}

