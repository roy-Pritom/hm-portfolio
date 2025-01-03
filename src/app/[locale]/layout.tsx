/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-wrapper-object-types */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

// Import message files for all locales statically
import enMessages from "@/messages/en.json";
import bnMessages from "@/messages/bn.json";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar/NavBar";
import ContactForm from "@/components/ContactPageComponents/ContactForm";

const messagesMap = {
  en: enMessages,
  bn: bnMessages,
};

// Generate static params for locales
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "bn" }];
}

type SegmentParams<T extends Object = any> = T extends Record<string, any>
  ? {
      [K in keyof T]: T[K] extends string
        ? string | string[] | undefined
        : never;
    }
  : T;

// Type for layout props
export interface LayoutProps {
  children?: React.ReactNode;
  params?: Promise<SegmentParams>; // params should be a promise
}

type LocaleLayoutProps = LayoutProps;

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  // Ensure params are resolved as a Promise
  const { locale } = await params; // Use await to resolve params

  // Validate locale and load messages
  const messages = messagesMap[locale as keyof typeof messagesMap] as any;
  if (!messages) {
    notFound(); // If no messages found, show a 404 page
  }

  return (
    // messages={messages}
    <NextIntlClientProvider     messages={messages}  locale={locale}>
      <NavBar />
      {/* <Header/> */}
      {children}
      <div className="container mx-auto">
      <ContactForm/>
      </div>
      <Footer />
    </NextIntlClientProvider>
  );
}
