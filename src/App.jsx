import React, { useState } from 'react'
import './styles/index.css'
import './i18n/i18n'
import Splash from './components/Splash'
import MusicPlayer from './components/MusicPlayer'
import LanguageSelector from './components/LanguageSelector'
import MainSite from './MainSite'

export default function App(){
  const [showSplash, setShowSplash] = useState(true)
  return (
    <>
      {showSplash ? <Splash onFinish={() => setShowSplash(false)} /> : (
        <>
          <LanguageSelector />
          <MusicPlayer />
          <MainSite />
        </>
      )}
    </>
  )
}
