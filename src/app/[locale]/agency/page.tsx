import AnimateAgency from '@/components/AgencyPageComponents/AnimateAgency';
import ServiceHeroSection from '@/components/shared/ServiceHeroSection';
import { TService } from '@/types/service';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const AgencyPage = () => {
    const t = useTranslations("recruitingAgency");
        
    const serviceData: TService = {
      subtitle:t("subtitle"),
      title: t("title"),
      des: t("des"),
      src: "/service/t.jpg",
    }
    return (
        <div>
                          <ServiceHeroSection data={serviceData} />
                                <div className="grid md:grid-cols-5 grid-cols-1 gap-10 mt-14 container mx-auto">
                                  <div className="lg:col-span-3 md:col-span-3">
                                      <div className="grid md:grid-cols-2 gap-4 ">
                                          {
                                              [
                                                {src:"/gallery/IMG-20241230-WA0014.jpg"},
                                                {src:"/gallery/IMG-20241230-WA0006.jpg"},
                                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                              ].map((item:any,i)=>(
                                                  <div key={i} className="flex items-center ">
                                                      <Image
                                                          src={item.src}
                                                          width={400}
                                                          height={200}
                                                          className=" rounded-md w-full lg:h-[240px] md:h-[180px] h-[250px] "
                                                          alt="brand"
                                                      />
                                                      <div>
                                                      </div>
                                                  </div>
                                              ))
                                          }
                                      </div>
                                 
                                  </div>
                          
                                  <div className="lg:col-span-2 md:col-span-2 text-[#444444]  text-justify ">
                                <div className="lg:space-y-6 md:space-y-3">
                                <h3 className="lg:text-3xl md:text-[20px] text-xl   font-semibold text-primaryColor">
                                     {t("title")}
                                    </h3>
                                    <p className="lg:text-[15px] text-sm  md:mt-0 mt-3">
                                      { t("des")}
                                    </p>
                                </div>
                                  </div>
                                </div>
            <AnimateAgency/>
        </div>
    );
};

export default AgencyPage;