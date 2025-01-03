import { getRequestConfig } from 'next-intl/server';
import { locales } from './config';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!locales.includes(locale as any)) {
    throw new Error('Invalid locale');
  }

  return {
    messages: (await import(`@/messages/${locale}.json`)).default,
    locale: locale
  };
});

