"use client"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 py-5 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/assets/logo.png" alt="Patagonia Protocol" width={160} height={48} className="h-12 w-auto" priority />
            <span className="font-bold text-xl text-[#2a5a40] tracking-tight">Patagonia Protocol</span>
          </Link>

          <nav className="hidden md:flex items-center gap-3">
            <Link href="/protocol" className="text-sm md:text-base font-medium px-3 py-2 rounded-md border border-transparent hover:border-[#cfead9] hover:bg-[#f7fff9] transition">El Protocolo</Link>
            <Link href="/token" className="text-sm md:text-base font-medium px-3 py-2 rounded-md border border-transparent hover:border-[#cfead9] hover:bg-[#f7fff9] transition">El Token</Link>
            <Link href="/portafolio" className="text-sm md:text-base font-medium px-3 py-2 rounded-md border border-transparent hover:border-[#cfead9] hover:bg-[#f7fff9] transition">El Portafolio</Link>
            <Link href="/club" className="text-sm md:text-base font-medium px-3 py-2 rounded-md border border-transparent hover:border-[#cfead9] hover:bg-[#f7fff9] transition">El Club</Link>
            <Link href="/blog" className="text-sm md:text-base font-semibold px-3 py-2 rounded-md border border-[#2a5a40] bg-[#ecf8f0] text-[#2a5a40]">El PataBlog</Link>
          </nav>
        </div>

        <div className="md:hidden">
          <button aria-label="menu" onClick={()=>setOpen(!open)} className="p-2 rounded-md border">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 flex flex-col gap-2">
            <Link href="/protocol" className="text-sm block px-3 py-2 rounded-md border border-transparent hover:bg-gray-50">El Protocolo</Link>
            <Link href="/token" className="text-sm block px-3 py-2 rounded-md border border-transparent hover:bg-gray-50">El Token</Link>
            <Link href="/portafolio" className="text-sm block px-3 py-2 rounded-md border border-transparent hover:bg-gray-50">El Portafolio</Link>
            <Link href="/club" className="text-sm block px-3 py-2 rounded-md border border-transparent hover:bg-gray-50">El Club</Link>
            <Link href="/blog" className="text-sm block px-3 py-2 rounded-md border border-[#2a5a40] bg-[#ecf8f0] text-[#2a5a40]">PataBlog</Link>
          </div>
        </div>
      )}
    </header>
  )
}
