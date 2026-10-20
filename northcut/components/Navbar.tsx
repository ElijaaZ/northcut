"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/75 backdrop-blur-xl lg:bg-black/30 lg:backdrop-blur-sm">
      <nav className="mx-auto flex h-16 w-full max-w-[1050px] items-center justify-between px-4 lg:px-6">
        <Link
          href="/"
          className="font-[family-name:var(--font-archivo)] text-2xl font-bold text-[#f4efe5]"
        >
          NORTHCUT.
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-[#c4bdb5]">
          <li>
            <Link href="#tjanster">Tjänster</Link>
          </li>
          <li>
            <Link href="#om-oss">Om oss</Link>
          </li>
          <li>
            <Link href="#galleri">Galleri</Link>
          </li>
          <li>
            <Link href="#oppettider">Öppettider</Link>
          </li>
          <li>
            <Link href="#kontakt">Kontakt</Link>
          </li>
          <li>
            <Link
              href="#boka"
              className="inline-block text-[#12100f] bg-[#c18f63] px-4 py-2 font-bold hover:bg-[#f4efe5] transition-all duration-200 hover:-translate-y-1"
            >
              Boka tid
            </Link>
          </li>
        </ul>

        <button
          type="button"
          aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex md:hidden flex-col gap-1.5 p-2"
        >
          {menuOpen ? (
            <span className="text-3xl font-light text-white">×</span>
          ) : (
            <div className="flex flex-col gap-1.5">
              <span className="h-0.5 w-6 bg-white" />
              <span className="h-0.5 w-6 bg-white" />
              <span className="h-0.5 w-6 bg-white" />
            </div>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="px-4 pb-6 md:hidden">
          <ul className="flex flex-col">
            {[
              ["Tjänster", "#tjanster"],
              ["Om oss", "#om-oss"],
              ["Galleri", "#galleri"],
              ["Öppettider", "#oppettider"],
              ["Kontakt", "#kontakt"],
            ].map(([label, href]) => (
              <li key={href} className="border-b border-white/15">
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-5 text-base font-medium text-[#f4efe5] transition-colors hover:text-[#c18f63]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#boka"
            onClick={() => setMenuOpen(false)}
            className="mt-5 block w-full bg-[#c18f63] px-6 py-4 text-center text-sm font-bold uppercase tracking-widest text-[#12100f] transition-colors hover:bg-[#f4efe5]"
          >
            Boka tid
          </Link>
        </div>
      )}
    </header>
  );
}
