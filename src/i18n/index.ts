import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import ChainedBackend, { ChainedBackendOptions } from 'i18next-chained-backend'
import HttpBackend, { HttpBackendOptions } from 'i18next-http-backend'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next'

i18n
  .use(ChainedBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init<ChainedBackendOptions>({
    lng: 'zh-CN',
    fallbackLng: 'en',
    ns: 'translation',
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    backend: {
      backends: [
        HttpBackend,
        resourcesToBackend(
          (language: string, namespace: string) =>
            import(`@/i18n/locales/${language}/${namespace}.json`),
        ),
      ],
      backendOptions: [
        {
          loadPath: async ([lang]) => {
            try {
              return ''
            } catch (err) {
              console.log(err)
            }
          },
        },
      ] as [HttpBackendOptions],
    },
  })

export default i18n
