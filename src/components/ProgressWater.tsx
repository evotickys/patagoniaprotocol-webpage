"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function ProgressWater({ className }: { className?: string }){
  return (
    <div className={className}>
      <div className="w-full h-4 bg-gray-200 rounded overflow-hidden">
        <motion.div
          className="h-4 bg-amber-400"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 2 }}
        />
      </div>
      <div className="text-sm text-gray-600 mt-2">Capital acumulado — ? USD</div>
    </div>
  )
}
