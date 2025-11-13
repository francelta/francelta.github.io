import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({requestLocale}) => {
  const locale = await requestLocale;
  let messages;
  try {
    if (locale === 'es') {
      messages = (await import('../messages/es.json')).default;
    } else {
      messages = (await import('../messages/en.json')).default;
    }
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    messages = {};
  }
  
  return {
    locale,
    messages
  };
});

