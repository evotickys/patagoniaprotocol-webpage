"use client"

import React from "react"

// Placeholder component while @react-three/fiber and three are not installed.
// The original implementation has been moved to `TokenHero3D.impl.tsx`.
export default function TokenHero3D() {
  return (
    <div className="w-full h-80 md:h-96 rounded-lg bg-gradient-to-br from-teal-700 to-emerald-600 flex items-center justify-center text-white">
      <div className="text-center">
        <div className="font-semibold">Visual 3D deshabilitado</div>
        <div className="text-sm mt-2">Instala `three` y `@react-three/fiber` para activar la visualización.</div>
      </div>
    </div>
  )
}
