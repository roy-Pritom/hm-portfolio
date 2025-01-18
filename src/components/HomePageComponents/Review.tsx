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
import Image from "next/image";
import { Play } from "lucide-react";
import Link from "next/link";
export function Review() {
  const autoplay = React.useRef(Autoplay({ delay: 2000 }));
  // const t = useTranslations("review");
  const t1 = useTranslations("reviewHeading");
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
              <h2 className="lg:text-3xl md:text-[22px] text-xl font-bold text-red-600 mb-6 text-center">
          {t1("title")} <span className="text-black">{t1("title1")}</span>
        </h2>
      <Carousel
        className="w-full"
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {/* className="pl-2 sm:pl-4 sm:basis-1/2 lg:basis-1/3" */}
        <CarouselContent className="-ml-2 sm:-ml-4">
          {/* <CarouselItem className="pl-2 sm:pl-4 sm:basis-1/2 lg:basis-1/3">
            <Testimonial
              category="New visit by medical center"
              quote={t("0.review")}
              author="Tina jain"
              role="CEO"
              rating={5}
              image="https://i.pravatar.cc/150?img=1"
            />
          </CarouselItem> */}
          <CarouselItem className="pl-2 sm:pl-4 sm:basis-1/2 lg:basis-1/3">
            <Link
              href="https://youtu.be/YIjA0J3rG2U?si=m5U9cWxvDhjxwaR5"
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
                  src="/review/1.jpg"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full rounded-md"
                  alt="poster"
                />
              </div>
            </Link>
          </CarouselItem>

          <CarouselItem className="pl-2 sm:pl-4 sm:basis-1/2 lg:basis-1/3">
            <Link
              href="https://youtu.be/L3z3rOp690I?si=HTOFunqjdBqXv2cq"
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
                  src="/review/2.jpg"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full rounded-md"
                  alt="poster"
                />
              </div>
            </Link>
          </CarouselItem>
  
          <CarouselItem className="pl-2 sm:pl-4 sm:basis-1/2 lg:basis-1/3">
            <Link
              href="https://youtu.be/AcuPolhqq48?si=dWE5X3eJ5KzWOGgW"
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
                  src="/review/3.jpg"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full rounded-md"
                  alt="poster"
                />
              </div>
            </Link>
          </CarouselItem>
          <CarouselItem className="pl-2 sm:pl-4 sm:basis-1/2 lg:basis-1/3">
            <Link
              href="https://youtu.be/tC81_B-bjzU?si=nyr8bNmpL1PPjhQJ"
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
                  src="/review/4.jpg"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full rounded-md"
                  alt="poster"
                />
              </div>
            </Link>
          </CarouselItem>

          <CarouselItem className="pl-2 sm:pl-4 sm:basis-1/2 lg:basis-1/3">
            <Link
              href="https://youtu.be/zvFfJF7Ffss?si=wAP3cicM7cpOpdAJ"
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
                  src="/review/5.jpg"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full rounded-md"
                  alt="poster"
                />
              </div>
            </Link>
          </CarouselItem>
  
          <CarouselItem className="pl-2 sm:pl-4 sm:basis-1/2 lg:basis-1/3">
            <Link
              href="https://youtu.be/rzbgGKfj2Y4?si=t-0EwUy19oOpVToC"
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
                  src="/review/6.jpg"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full rounded-md"
                  alt="poster"
                />
              </div>
            </Link>
          </CarouselItem>
          <CarouselItem className="pl-2 sm:pl-4 sm:basis-1/2 lg:basis-1/3">
            <Link
              href="https://youtu.be/b-UHWNT1rI0?si=rjqw63m0XwCXHt5O"
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
                  src="/review/7.jpg"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full rounded-md"
                  alt="poster"
                />
              </div>
            </Link>
          </CarouselItem>

          <CarouselItem className="pl-2 sm:pl-4 sm:basis-1/2 lg:basis-1/3">
            <Link
              href="https://youtu.be/gdugNViYPl4?si=faaaRU-HgIkR2WDV"
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
                  src="/review/8.jpg"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full rounded-md"
                  alt="poster"
                />
              </div>
            </Link>
          </CarouselItem>
  
          <CarouselItem className="pl-2 sm:pl-4 sm:basis-1/2 lg:basis-1/3">
            <Link
              href="https://youtu.be/zaGNPgh04kg?si=aGZGbGK79ZTCg9CA"
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
                  src="/review/9.jpg"
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
