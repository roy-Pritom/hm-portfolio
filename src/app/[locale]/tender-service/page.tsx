import ServiceHeroSection from '@/components/shared/ServiceHeroSection';
import { TService } from '@/types/service';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const TenderServicePage = () => {
            const t = useTranslations("tenderService");
        
      const serviceData: TService = {
        subtitle:t("subtitle"),
        title: t("title"),
        des: t("des"),
        src: "/service/t.jpg",
      }
    return (
        <div className=''>
              <ServiceHeroSection data={serviceData} />
               {/* <div className='relative bg-cover  bg-center lg:h-[450px] h-[180px] overflow-hidden  '
        style={{backgroundImage: "url('/service/tender.webp')", backgroundPosition: "center top"}}>
           <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white">
               <p className='lg:text-3xl md:text-[22px] text-xl font-bold bg-black opacity-60 px-4 py-2 mt-2 rounded-t-md w-fit mx-auto'>Tender Service</p>
   
           </div>
       </div> */}
       <div className="grid md:grid-cols-5 grid-cols-1 gap-10 mt-14 container mx-auto">
         <div className="lg:col-span-3 md:col-span-3">
             <div className="grid md:grid-cols-2 gap-4 ">
                 {
                     Array(2).fill(0).map((_,i)=>(
                         <div key={i} className="flex items-center ">
                             <Image
                                 src="/service/tender1.webp"
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
             {/* <Image
                 src="/travel-agency/travelCard.webp"
                 width={500}
                 height={250}
                 className="lg:w-[250px] w-full h-[200px] rounded-md "
                 alt="brand"
             /> */}
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
        </div>
    );
};

export default TenderServicePage;