import React from 'react';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useTranslations } from 'next-intl';

const ContactForm = () => {
  const t = useTranslations("contact");
    return (
        <div className="grid md:grid-cols-2 gap-8 py-12">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <Input 
                type="text" 
                placeholder={t("name")} 
                className="border-gray-300"
              />
              <Input 
                type="email" 
                placeholder={t("email")} 
                className="border-gray-300"
              />
              <Input 
                type="text" 
                placeholder={t("subject")}
                className="border-gray-300"
              />
              <Textarea 
                placeholder={t("message")}
                className="h-32 border-gray-300"
              />
              <Button 
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white"
              >
                {t("btn")}
              </Button>
            </div>
          </form>
        </div>

        {/* Map */}
        <div className="h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5983460988937!2d90.4237!3d23.7937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ3JzM3LjMiTiA5MMKwMjUnMjUuMyJF!5e0!3m2!1sen!2sbd!4v1639580095261!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    );
};

export default ContactForm;