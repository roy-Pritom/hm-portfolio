import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

const AboutUs = () => {
    const t = useTranslations();

    return (
        <div className="grid md:grid-cols-5 grid-cols-1 gap-10 mt-14 container mx-auto">
            <div className="lg:col-span-1 md:col-span-2">
                <Image
                    src="/about/about.webp"
                    width={500}
                    height={250}
                    className="lg:w-[550px] w-full h-[250px] rounded-md"
                    alt="brand"
                />
            </div>

            <div className="lg:col-span-4 md:col-span-3 text-[#444444] space-y-3 text-justify">
                <h3 className="lg:text-3xl md:text-[22px] text-xl font-bold">
                    {t('about.title')}
                </h3>
                <p className="text-[15px]">{t('about.intro')}</p>

                <h3 className="md:text-lg text-base font-semibold">{t('about.portfolioTitle')}</h3>
                <p className="text-[15px]">{t('about.portfolio')}</p>

                <h3 className="md:text-lg text-base font-semibold">{t('about.travelAgencyTitle')}</h3>
                <p className="text-[15px]">{t('about.travelAgency')}</p>

                <h3 className="md:text-lg text-base font-semibold">{t('about.recruitmentTitle')}</h3>
                <p className="text-[15px]">{t('about.recruitment')}</p>

                <h3 className="md:text-lg text-base font-semibold">{t('about.valuesTitle')}</h3>
                <p className="text-[15px]">
    <span className="text-base font-semibold">{t('about.values.0.label')}</span> {t('about.values.0.description')}
</p>
<p className="text-[15px]">
    <span className="text-base font-semibold">{t('about.values.1.label')}</span> {t('about.values.1.description')}
</p>
<p className="text-[15px]">
    <span className="text-base font-semibold">{t('about.values.2.label')}</span> {t('about.values.2.description')}
</p>



                <h3 className="md:text-lg text-base font-semibold">{t('about.closingTitle')}</h3>
                <p className="text-[15px]">{t('about.closing')}</p>
            </div>
        </div>
    );
};

export default AboutUs;
