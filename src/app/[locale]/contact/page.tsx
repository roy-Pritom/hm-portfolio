
import { MapPin, Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contactPage");

  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative lg:h-[500px] h-[220px] bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("/contact/contact.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <h1 className="lg:text-3xl md:text-[22px] text-xl  font-bold text-white absolute bottom-10 z-10 ab">
          {t('title')}
        </h1>
      </div>

      {/* Contact Info Section */}
      <div className="container mx-auto pt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Address */}
        <div className="relative flex flex-col items-center text-center md:p-6 p-4 rounded-lg bg-white shadow-lg group overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-full bg-primaryColor transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
          <div className="relative z-10">
            <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4 mx-auto">
              <MapPin className="h-6 w-6 text-red-500 group-hover:text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-white">
              {t("addressTitle")}
            </h3>
            <p className="text-gray-600 group-hover:text-white">{t("address")}</p>
          </div>
        </div>

        {/* Email */}
        <div className="relative flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-lg group overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-full bg-primaryColor transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
          <div className="relative z-10">
            <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4 mx-auto">
              <Mail className="h-6 w-6 text-red-500 group-hover:text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-white">
              {t("emailTitle")}
            </h3>
            <div className="text-gray-600 group-hover:text-white">
              <p>{t("emails.0")}</p>
              <p>{t("emails.1")}</p>
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="relative flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-lg group overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-full bg-primaryColor transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
          <div className="relative z-10">
            <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4 mx-auto">
              <Phone className="h-6 w-6 text-red-500 group-hover:text-white mx-auto" />
            </div>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-white">
              {t("phoneTitle")}
            </h3>
            <div className="text-gray-600 group-hover:text-white">
              <p>{t("phones.0")}</p>
              <p>{t("phones.1")}</p>
              <p>{t("phones.2")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
