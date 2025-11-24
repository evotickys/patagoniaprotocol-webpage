"use client"

// Placeholder hero: removed the previous 3D client component and its loading image
// to avoid the brief fallback flash. This returns a lightweight decorative block
// that preserves layout. Replace with the new hero content when ready.
export default function TokenHero3D() {
  return (
    <div aria-hidden="true" className="w-full max-w-xl rounded-lg overflow-hidden shadow-lg">
      <div className="w-full h-64 md:h-80 lg:h-96 bg-gradient-to-br from-[#0f3b2a] to-[#163f2d]" />
    </div>
  )
}
