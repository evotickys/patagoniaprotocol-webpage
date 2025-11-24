"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { dur, VIEWPORT } from '@/lib/anim'
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion'

export default function ProgressWater({ className }: { className?: string }){
  const prefersReduced = usePrefersReducedMotion()
  return (
    <div className={className}>
      <div className="w-full h-4 bg-gray-200 rounded overflow-hidden">
        <motion.div
          className="h-4 bg-amber-400"
          initial={{ width: 0 }}
          whileInView={prefersReduced ? { width: '100%' } : { width: '100%' }}
          viewport={VIEWPORT}
          transition={prefersReduced ? undefined : { duration: dur(2) }}
        />
      </div>
      <div className="text-sm text-gray-600 mt-2">Capital acumulado — ? USD</div>
    </div>
  )
}
