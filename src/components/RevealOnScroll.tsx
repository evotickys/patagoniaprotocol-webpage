"use client"

import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { dur, VIEWPORT } from '@/lib/anim'

type Props = HTMLMotionProps<'div'>

export default function RevealOnScroll({ children, ...props }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: dur(0.6), ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
