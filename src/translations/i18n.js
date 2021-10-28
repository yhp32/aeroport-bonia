import { createI18n } from 'react-router-i18n'

import English from './en'

const locales = ['en']
const translations = {
  en: English
}

const i18n = createI18n(locales, translations)

export default i18n
