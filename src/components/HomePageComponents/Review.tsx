"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
// import UserReviewCard from "./ReveiwCard"
import { useTranslations } from "next-intl";
import Testimonial from "./TestimonialSection";
import Image from "next/image";
import { Play } from "lucide-react";
import Link from "next/link";
export function Review() {
  const autoplay = React.useRef(Autoplay({ delay: 2000 }));
  const t = useTranslations("review");
  // const reviews = [
  //   {
  //     name: t("0.name"),
  //     rating: 5,
  //     review: t("0.review"),
  //     avatarUrl: "https://i.pravatar.cc/150?img=1",
  //   },
  //   {
  //     name: t("1.name"),
  //     rating: 4,
  //     review: t("1.review"),
  //     avatarUrl: "https://i.pravatar.cc/150?img=2",
  //   },
  //   {
  //     name: t("2.name"),
  //     rating: 3,
  //     review: t("2.review"),
  //     avatarUrl: "https://i.pravatar.cc/150?img=3",
  //   },
  //   {
  //     name: t("3.name"),
  //     rating: 5,
  //     review: t("3.review"),
  //     avatarUrl: "https://i.pravatar.cc/150?img=4",
  //   },
  // ];



  return (
    <div className="relative w-full container mx-auto pt-12 ">
      <Carousel
        className="w-full"
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {/* className="pl-2 sm:pl-4 sm:basis-1/2 lg:basis-1/3" */}
        <CarouselContent className="-ml-2 sm:-ml-4">
          <CarouselItem className="pl-2 sm:pl-4 sm:basis-1/2 lg:basis-1/3">
            <Testimonial
              category="New visit by medical center"
              quote={t("0.review")}
              author="Tina jain"
              role="CEO"
              rating={5}
              image="https://i.pravatar.cc/150?img=1"
            />
          </CarouselItem>
          <CarouselItem className="pl-2 sm:pl-4 sm:basis-1/2 lg:basis-1/3">
            <Link
              href="https://youtu.be/KIzCpTA2p5Y?si=W15zevatJsWOi2K3"
              className="cursor-pointer"
            >
              <div className="relative h-[280px] rounded-md overflow-hidden group cursor-pointer">
                {/* Animated Overlay */}

                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300"></div>

                {/* Play Icon */}
                <Play
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 transition-opacity duration-300"
                  fill="white"
                  size={32}
                  color="white"
                />

                {/* Image */}
                <Image
                  src="/service/t.jpg"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full rounded-md"
                  alt="poster"
                />
              </div>
            </Link>
          </CarouselItem>
          <CarouselItem className="pl-2 sm:pl-4 sm:basis-1/2 lg:basis-1/3">
            <Testimonial
              category="New visit by medical center"
              quote={t("1.review")}
              author="John Doe"
              role="CEO"
              rating={4}
              image="https://i.pravatar.cc/150?img=3"
            />
          </CarouselItem>
          <CarouselItem className="pl-2 sm:pl-4 sm:basis-1/2 lg:basis-1/3">
            <Link
              href="https://youtu.be/KIzCpTA2p5Y?si=W15zevatJsWOi2K3"
              className="cursor-pointer"
            >
              <div className="relative h-[280px] rounded-md overflow-hidden group cursor-pointer">
                {/* Animated Overlay */}

                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300"></div>

                {/* Play Icon */}
                <Play
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 transition-opacity duration-300"
                  fill="white"
                  size={32}
                  color="white"
                />

                {/* Image */}
                <Image
                  src="/service/t.jpg"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full rounded-md"
                  alt="poster"
                />
              </div>
            </Link>
          </CarouselItem>
          <CarouselItem className="pl-2 sm:pl-4 sm:basis-1/2 lg:basis-1/3">
            <Testimonial
              category="New visit by medical center"
              quote={t("2.review")}
              author="Tim David "
              role="CEO"
              rating={5}
              image="https://i.pravatar.cc/150?img=4"
            />
          </CarouselItem>
          <CarouselItem className="pl-2 sm:pl-4 sm:basis-1/2 lg:basis-1/3">
            <Link
              href="https://youtu.be/KIzCpTA2p5Y?si=W15zevatJsWOi2K3"
              className="cursor-pointer"
            >
              <div className="relative h-[280px] rounded-md overflow-hidden group cursor-pointer">
                {/* Animated Overlay */}

                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300"></div>

                {/* Play Icon */}
                <Play
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 transition-opacity duration-300"
                  fill="white"
                  size={32}
                  color="white"
                />

                {/* Image */}
                <Image
                  src="/service/t.jpg"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full rounded-md"
                  alt="poster"
                />
              </div>
            </Link>
          </CarouselItem>
        </CarouselContent>

        <div className="absolute -left-4 sm:-left-6 top-1/2 transform -translate-y-1/2">
          <CarouselPrevious className="relative left-0" />
        </div>
        <div className="absolute -right-4 sm:-right-6 top-1/2 transform -translate-y-1/2">
          <CarouselNext className="relative right-0" />
        </div>
      </Carousel>
    </div>
  );
}
