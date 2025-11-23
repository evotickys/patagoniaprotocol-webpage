 
import Scene01Hero from '@/components/Scene01Hero'
import Scene02Gap from '@/components/Scene02Gap'
import Scene03Protocol from '@/components/Scene03Protocol'
import Scene04Fractal from '@/components/Scene04Fractal'
import Scene05Asset from '@/components/Scene05Asset'
import Scene06River from '@/components/Scene06River'
import Scene07Club from '@/components/Scene07Club'
import Scene08CTA from '@/components/Scene08CTA'
import SceneBlogPreview from '@/components/SceneBlogPreview'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* HERO (Scene 01) */}
      <Scene01Hero />

      {/* SCENE 02 - GAP */}
      <Scene02Gap />

      {/* SCENE 03 - PROTOCOL */}
      <Scene03Protocol />

      {/* SCENE 04 - FRACTAL */}
      <Scene04Fractal />

      {/* SCENE 05 - ASSET (replaces previous ACTIVO section) */}
      <Scene05Asset />

      {/* SCENE 06 - RIVER (progress) */}
      <Scene06River />

      {/* SCENE 07 - CLUB */}
      <Scene07Club />

      {/* SCENE 08 - CTA */}
      <Scene08CTA />

      {/* legacy sections removed: Value Prop, Activo, Club — replaced by Scene components above */}

      {/* PATA BLOG preview */}
      <SceneBlogPreview />
    </main>
  )
}
