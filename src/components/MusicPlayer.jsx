import React, { useRef, useState } from 'react'

// External audio link (free-hosted sample) - replace with your hosted file if desired
const EXTERNAL_AUDIO = 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_3f2f7f3c0a.mp3?filename=relaxing-piano-11258.mp3'

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggle = async () => {
    if (!audioRef.current) return
    try {
      if (playing) {
        audioRef.current.pause()
        setPlaying(false)
      } else {
        await audioRef.current.play()
        setPlaying(true)
      }
    } catch (e) {
      console.warn('Playback prevented', e)
    }
  }

  return (
    <>
      <audio ref={audioRef} src={EXTERNAL_AUDIO} loop preload="auto" />
      <button onClick={toggle} className="music-btn" aria-label={playing ? 'Pause music' : 'Play music'}>
        {playing ? '⏸️' : '🎵'}
      </button>
    </>
  )
}
