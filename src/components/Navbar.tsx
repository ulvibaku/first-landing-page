'use client'

import { useState } from 'react'

const navItems = [
  { label: 'Leistungen', href: '#services' },
  { label: 'Einsatzbereiche', href: '#showcase' },
  { label: 'Warum', href: '#why' },
  { label: 'Ablauf', href: '#workflow' },
  { label: 'Kontakt', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="font-semibold tracking-[0.18em] text-slate-100">
          ULVI
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-white/20 hover:bg-white/10 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Navigation öffnen"
        >
          <span className="text-xl">{open ? '✕' : '☰'}</span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-6 backdrop-blur-xl md:hidden">
          <div className="space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition hover:border-white/20 hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
