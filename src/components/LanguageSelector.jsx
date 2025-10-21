import React from 'react'
import { useTranslation } from 'react-i18next'

export default function LanguageSelector() {
  const { i18n } = useTranslation()
  return (
    <div className="lang-selector">
      <button onClick={() => i18n.changeLanguage('es')} style={{marginRight:6}}>🇪🇸</button>
      <button onClick={() => i18n.changeLanguage('en')}>🇺🇸</button>
    </div>
  )
}
