import React from 'react'

export default function SatelliteMap({ className }: { className?: string }){
  return (
    <div className={className}>
      <div className="w-full h-64 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center text-white/80 font-mono">[Satellite Map Placeholder]</div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
        <div className="bg-white/5 p-3 rounded">Nodo: Ventisquero Grosse</div>
        <div className="bg-white/5 p-3 rounded">Valuación: USD 3.0M</div>
      </div>
    </div>
  )
}
