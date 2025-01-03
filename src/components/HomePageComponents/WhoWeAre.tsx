import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhoWeAre = () => {
  const t = useTranslations("whoWeAre");
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto  grid lg:grid-cols-3 grid-cols-1 gap-12">
        {/* Image Section */}
        <div className="lg:col-span-1 ">
          <Image
            src="/home/person.webp"
            alt="Managing Director"
            className="rounded shadow lg:w-[366px] lg:h-[244px] w-full"
            width={300}
            height={250}
          />
          <p className="text-center mt-4 font-bold">{t("position")}</p>
          <p className="text-center text-gray-700">{t("name")}</p>
        </div>

        {/* Text Section */}
        <div className="lg:col-span-2 ">
          <h2 className="lg:text-3xl md:text-[22px] text-xl md:text-center lg:text-left text-center font-bold text-red-600 mb-6">
            {t("title1")} <span className="text-black">{t("title2")}</span>
          </h2>
          <p className="text-gray-700 mb-2 text-justify">{t("subtitle")}</p>
          <p className="text-gray-700 mb-6 text-justify">{t("description")}</p>
          <div className="flex justify-center items-center">
            <Link href="/about">
              <button className="bg-primaryColor text-white px-6 py-2 rounded hover:bg-red-700">
                {t("btn")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
