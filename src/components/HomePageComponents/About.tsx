import { useTranslations } from "next-intl";

const About = () => {

  const t=useTranslations('aboutUs');
  return (
    <div className="container mx-auto mb-8 mt-14 ">
      <h1 className="text-center lg:text-7xl md:text-5xl text-2xl font-bold  leading-tight">
        {t("title")} <br />
      </h1>
        <p className="text-primaryColor text-center lg:text-7xl md:text-5xl text-2xl font-bold mt-2 ">{t("title1")}</p>
    </div>
  );
};

export default About;
