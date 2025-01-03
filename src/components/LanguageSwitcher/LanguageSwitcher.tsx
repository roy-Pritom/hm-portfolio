'use client';

import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher()

 { const t = useTranslations('LanguageSwitcher'); const pathname = usePathname(); const router = useRouter(); const locale = useLocale();

  const switchLocale = () => { const nextLocale = locale === 'en' ? 'bn' : 'en'; router.push(pathname.replace(new RegExp(`${locale}`), nextLocale)); };
  
  return ( <button onClick={switchLocale}  className='px-4 py-2 bg-primaryColor text-white rounded' > {t('switchLanguage')} </button> ); }

