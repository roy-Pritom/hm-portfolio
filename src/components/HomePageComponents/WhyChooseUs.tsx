import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const WhyChooseUs = () => {
    const t = useTranslations("feature");
    const t2 = useTranslations("whyChooseUs");
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto ">
   <div className="flex md:flex-row flex-col lg:justify-center md:justify-start md:items-start lg:items-center gap-4">
   <div className="">
  <h2 className="lg:text-3xl md:text-[22px] text-xl font-bold text-red-600 mb-6">
    {t2('title').split(' ').map((word, index) =>
      word === "Choose" ? (
        <span key={index} className="text-black"> {word}</span>
      ) : (
        <span key={index} className="text-red-600"> {word}</span>
      )
    )}
  </h2>
  <p className="mb-6 text-gray-700 ">
    {t2('description')}
  </p>
  <ul className="space-y-2 mb-8">
  {[
      t2('points.0'),
      t2('points.1'),
      t2('points.2'),
      t2('points.3'),
    ].map((item, idx) => (
      <li key={idx} className="flex items-center text-gray-700">
        <span className="text-red-600 mr-2">→</span> {item}
      </li>
    ))}
  </ul>
<Link href='/about'>
<button className="bg-primaryColor text-white px-6 py-2 rounded hover:bg-red-700">
    {t2('btn')}
  </button>
</Link>
</div>



        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-6 ">
          {[
            {
              title: t('0.title'),
              description: t('0.description'),
              icon: "💼"
            },
            {
              title: t('1.title'),
              description: t('1.description'),
              icon: "🚢"
            },
            {
              title: t('2.title'),
              description: t('2.description'),
              icon: "💻"
            },
            {
              title: t('3.title'),
              description: t('3.description'),
              icon: "✈️"
            },
          ].map((card, idx) => (
            <div
            key={idx}
            className="bg-gray-100 lg:p-6 p-2 rounded shadow relative overflow-hidden transition group text-left hover:text-white"
          >
            {/* Animated Bar */}
            <div
              className="absolute bottom-0 left-0 w-full h-full bg-primaryColor transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
            ></div>
          
            {/* Content Layer */}
            <div className="relative z-10">
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="lg:text-xl text-sm font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 lg:text-base text-[13px] group-hover:text-white">
                {card.description}
              </p>
            </div>
          </div>
          
          ))}
        </div>
   </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
