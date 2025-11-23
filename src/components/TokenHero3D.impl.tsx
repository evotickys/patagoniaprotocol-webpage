"use client"

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function TokenHero3DImpl() {
  return (
    <div className="w-full max-w-xl rounded-lg overflow-hidden shadow-lg">
      <div className="w-full h-64 md:h-80 lg:h-96">
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />

          <mesh rotation={[0.6, 0.6, 0]}>
            <torusKnotGeometry args={[0.8, 0.25, 128, 32]} />
            <meshStandardMaterial color="#fbbf24" metalness={0.8} roughness={0.2} />
          </mesh>

          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
        </Canvas>
      </div>
    </div>
  )
}
