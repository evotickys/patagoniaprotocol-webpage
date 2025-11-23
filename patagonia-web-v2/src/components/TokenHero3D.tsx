"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function RotatingMesh() {
  const ref = useRef<THREE.Mesh | null>(null)
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.4
  })
  return (
    <mesh ref={ref} castShadow>
      <icosahedronGeometry args={[1.6, 1]} />
      <meshStandardMaterial color="#7ee7b8" metalness={0.35} roughness={0.25} />
    </mesh>
  )
}

export default function TokenHero3D() {
  return (
    <div className="w-full h-80 md:h-96">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <SuspenseFallback />
        <RotatingMesh />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  )
}

function SuspenseFallback() {
  return null
}
