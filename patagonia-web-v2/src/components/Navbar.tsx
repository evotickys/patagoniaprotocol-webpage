"use client"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/assets/logo.svg" alt="Patagonia Protocol" width={120} height={32} className="h-8 w-auto" />
          <span className="font-bold text-lg text-[#2a5a40]">Patagonia Protocol</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="/protocol" className="text-sm font-medium">El Protocolo</Link>
          <Link href="/token" className="text-sm font-medium">El Token</Link>
          <Link href="/portafolio" className="text-sm font-medium">El Portafolio</Link>
          <Link href="/club" className="text-sm font-medium">El Club</Link>
          <Link href="/blog" className="text-sm font-semibold text-[#2a5a40]">PataBlog</Link>
        </nav>

        <div className="md:hidden">
          <button aria-label="menu" onClick={()=>setOpen(!open)} className="p-2 rounded-md border">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 flex flex-col gap-2">
            <Link href="/protocol" className="text-sm">El Protocolo</Link>
            <Link href="/token" className="text-sm">El Token</Link>
            <Link href="/portafolio" className="text-sm">El Portafolio</Link>
            <Link href="/club" className="text-sm">El Club</Link>
            <Link href="/blog" className="text-sm font-semibold text-[#2a5a40]">PataBlog</Link>
          </div>
        </div>
      )}
    </header>
  )
}
