"use client"

import React, { useState } from 'react'

export default function WaitlistModal({ open, onClose }:{ open:boolean, onClose:()=>void }){
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !email.includes('@')) return
    setSubmitting(true)
    try {
      // placeholder: replace with real API call
      console.log('waitlist submit', email)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        ;(window as any).gtag('event','waitlist_signup',{email})
      }
      setTimeout(()=>{
        setSuccess(true)
        setSubmitting(false)
      }, 600)
    } catch (err) {
      console.error(err)
      setSubmitting(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full p-6 z-10">
        <button className="absolute top-3 right-3 text-gray-500" onClick={onClose} aria-label="Cerrar">✕</button>
        <h3 className="text-xl font-bold text-gray-900">Unirse a la Espera</h3>
        <p className="mt-2 text-sm text-gray-600">Deja tu correo y te avisamos cuando abra la preventa.</p>

        {success ? (
          <div className="mt-4 text-green-600">Gracias — te avisaremos por email.</div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4">
            <label className="sr-only" htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="tu@correo.cl" className="w-full border rounded-md px-3 py-2" />
            <div className="mt-4 flex items-center justify-end gap-3">
              <button type="button" onClick={onClose} className="px-4 py-2 rounded-md border">Cancelar</button>
              <button type="submit" disabled={submitting} className="px-4 py-2 rounded-md bg-[#D4AF37] text-black font-semibold">{submitting ? 'Enviando...' : 'Solicitar Acceso'}</button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
