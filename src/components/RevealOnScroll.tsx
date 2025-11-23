"use client"

import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

type Props = HTMLMotionProps<'div'>

export default function RevealOnScroll({ children, ...props }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
