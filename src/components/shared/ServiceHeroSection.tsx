import Image from 'next/image';
import React from 'react';
// import { Button } from '../ui/button';
// import { useTranslations } from 'next-intl';

type TProps={
    data:{
        title:string;
        subtitle:string;
        des:string;
        src:string;
    }
}
const ServiceHeroSection = ({data}:TProps) => {
    // const t=useTranslations("demo");
    return (
        <div className="relative w-full  bg-[#F2F8F9] py-24  overflow-hidden">
        {/* Main curved background */}
        <div 
          className="absolute top-0 right-0 w-[150%] sm:w-[120%] md:w-[100%] lg:w-[60%] h-[40%] sm:h-[70%] md:h-[60%] lg:h-full bg-[#06445c] rounded-bl-[100%] transform origin-top-right scale-110 sm:scale-100"
        />
  
        {/* Content container */}
        <div className="relative  w-full pt-8 sm:pt-12 lg:pt-24 container mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-12  items-center">
            {/* Left column - Text content */}
            <div className="space-y-4 sm:space-y-6 z-10 order-2 lg:order-1">
              <p className="lg:text-5xl md:text-4xl text-2xl font-semibold tracking-wider text-gray-900">{data?.title}</p>
              <h1 className="text-sm  lg:text-base font-normal leading-tight text-gray-900 md:w-[60%] lg:w-[78%]">
             {data?.subtitle}
              </h1>
              {/* <p className="md:text-base text-sm  text-gray-600 max-w-xl">
              {data?.des}
              </p> */}
              {/* <Button
                variant="link"
                className="text-[#06445c] font-semibold hover:text-[#06445c]/80 p-0 flex items-center gap-2 group"
              >
                {t("x")}
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </Button> */}
            </div>
  
            {/* Right column - Image */}
            <div className="relative z-10 mt-8 md:mt-0 order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={data.src ? data.src : "/service/t.jpg"}
                  alt="Supplier risk management"
                  width={800}
                  height={600}
                  layout="responsive"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
  
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top right decorative elements */}
          <div className="absolute top-8 right-8">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#f4811f] rounded-full opacity-60" />
            <div className="w-4 h-4 sm:w-6 sm:h-6 bg-sky-300 rounded-full absolute -top-2 right-8 opacity-40" />
            <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-white/20 rounded-full absolute top-4 -right-4" />
          </div>
  
          {/* Right side decorative elements */}
          <div className="absolute top-1/4 right-[15%] hidden sm:block">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#f4811f]/20 rounded-lg rotate-45" />
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-sky-300/30 rounded-full absolute -top-8 right-12" />
          </div>
  
          {/* Bottom right decorative elements */}
          <div className="absolute bottom-1/4 right-[10%] hidden sm:block">
            <div className="w-16 h-8 sm:w-20 sm:h-10 bg-[#f4811f]/30 rounded-full" />
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/10 rounded-sm rotate-45 absolute -bottom-4 right-4" />
          </div>
  
          {/* Leaf shape */}
          <div className="absolute right-[25%] top-[15%] hidden md:block">
            <div className="w-8 h-12 sm:w-12 sm:h-16 bg-sky-300/20 rounded-tl-[100px] rounded-tr-[100px]" />
          </div>
  
          {/* Additional geometric shapes */}
          <div className="absolute right-[20%] bottom-[20%] hidden md:block">
            <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-white/10 rounded-full" />
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#f4811f] rounded-sm rotate-45 absolute -bottom-4 -right-4 opacity-40" />
          </div>
  
          {/* Grid pattern */}
          <div className="absolute right-[30%] top-[40%] hidden lg:block">
            <div className="grid grid-cols-3 gap-1">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/20 rounded-sm" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceHeroSection;