import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Services = () => {
  const t = useTranslations("service");
  const services = [
    {
      title: t("0.title"),
      description: t("0.description"),
      icon: "✈️",
      image: "/home/y1.webp",
    },
    {
      title: t("1.title"),
      description: t("1.description"),
      icon: "🛂",
      image: "/home/y2.webp",
    },
    {
      title: t("2.title"),
      description: t("2.description"),
      icon: "💻",
      image: "/home/y3.webp",
    },
    {
      title: t("3.title"),
      description: t("3.description"),
      icon: "📱",
      image: "/home/y4.webp",
    },
    {
      title: t("4.title"),
      description: t("4.description"),
      icon: "📑",
      image: "/home/y6.webp",
    },
    {
      title: t("5.title"),
      description: t("5.description"),
      icon: "🚢",
      image: "/home/y7.webp",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="lg:text-3xl md:text-[22px] text-xl font-bold text-red-600 mb-6 text-center">
          {t("6.title1")} <span className="text-black">{t("6.title2")}</span>
        </h2>
        <p className="text-gray-600 text-center mb-8">
        {t("6.subtitle")}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services
?.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-100 md:p-6  max-w-md rounded shadow hover:shadow-lg transition"
            >
              <Image
                src={service.image}
                alt={service.title}
                className="md:rounded  rounded rounded-b-none mb-4 "
                width={400}
                height={400}
              />
          <div className="px-2 md:p-0">
          <h3 className="md:text-xl text-sm font-semibold mb-2 text-red-600">
                {service.title}
              </h3>
              <p className="text-gray-700 md:text-base text-[13px]">{service.description}</p>
          </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
