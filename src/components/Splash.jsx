import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const SPLASH_DURATION_MS = 3000

export default function Splash({ onFinish }) {
  useEffect(() => {
    const t = setTimeout(() => onFinish(), SPLASH_DURATION_MS)
    return () => clearTimeout(t)
  }, [onFinish])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-pink-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-balloons">
          <div className="balloon balloon1"></div>
          <div className="balloon balloon2"></div>
          <div className="balloon balloon3"></div>
        </div>
      </div>
      <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{duration:1}}>
        <h1 className="font-handwriting text-6xl" style={{letterSpacing:'1px'}}>Lali’s Balloons & Designs</h1>
        <p className="mt-3 text-pink-600">Tu evento soñado cobra vida 🎈</p>
      </motion.div>
    </div>
  )
}
