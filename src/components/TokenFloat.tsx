"use client"

import React from 'react'
import { motion } from 'framer-motion'

type TokenFloatProps = {
  className?: string
  onClick?: () => void
  ariaLabel?: string
}

export default function TokenFloat({ className, onClick, ariaLabel = 'Unirse a la espera' }: TokenFloatProps){
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!onClick) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <motion.div
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={onClick ? ariaLabel : undefined}
      onKeyDown={handleKeyDown}
      onClick={onClick}
      className={`${className ?? ''} ${onClick ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-300 rounded-full' : ''}`}
      initial={{ scale: 0.9, opacity: 0.85 }}
      animate={{ scale: [0.96, 1.04, 0.96], rotate: [0, 8, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      style={{ display: 'inline-block' }}
    >
      <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#8ef0c2" />
            <stop offset="100%" stopColor="#0b7f5a" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="34" fill="url(#g1)" opacity="0.95" />
        <circle cx="50" cy="50" r="18" fill="#052a1f" opacity="0.08" />
        <text x="50%" y="54%" textAnchor="middle" fontSize="18" fontWeight={700} fill="white">$PAT</text>
      </svg>
    </motion.div>
  )
}
