import FAQSection from '@/components/Faq/FAQSection';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const FaqPage = () => {
    const t = useTranslations("faq");

    return (
        <div>
               <div className='relative bg-cover  bg-center lg:h-[450px] h-[180px] overflow-hidden mt-14'
        style={{backgroundImage: "url('/faq/cover.webp')", backgroundPosition: "center top"}}>
           <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center text-white">
               <p className='lg:text-3xl md:text-[22px] text-xl font-bold bg-black opacity-60 px-4 py-2 mt-2 rounded-t-md w-fit mx-auto'>{t("title")}</p>
               <p className='md:text-lg text-sm bg-black opacity-60 px-4 py-2  rounded-md'>{t("subtitle")}</p>
           </div>
       </div>
        <div className='grid md:grid-cols-5 grid-cols-1 gap-10 mt-14 container mx-auto'>
                   <div className="lg:col-span-1 md:col-span-2">
                       <Image src="/faq/faq.webp" width={500} height={250} className="lg:w-[550px] w-full h-[250px] rounded-md " alt="brand" />
                   </div>
       
                   <div className="lg:col-span-4 md:col-span-3 text-[#444444] space-y-3 text-justify ">
                      
                       <h3 className='lg:text-3xl md:text-[22px] text-xl  font-bold'>{t("questions.0.title")}
                       </h3>
                       <p className='text-[15px]'>{t("questions.0.description")}
                       </p>
                       <h3 className='md:text-lg text-base font-semibold'>{t("questions.1.title")}</h3>
                       <p className='text-[15px]'>{t("questions.1.description")}</p>
                   
                   </div>
               </div>
               <FAQSection/>
        </div>
    );
};

export default FaqPage;