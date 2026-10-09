"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-plum-dark text-white">
        <p className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2 text-center text-xs font-semibold sm:text-sm">
          <span className="inline-flex h-2 w-2 rounded-full bg-pink" aria-hidden />
          Atendimento veterinário 24 horas em Caldas Novas
          <span className="hidden sm:inline">· {site.phoneDisplay}</span>
        </p>
      </div>
      <div className="border-b border-plum/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link href="/" className="flex items-center gap-3 rounded-xl" aria-label="Universo Pet — página inicial">
            <Image
              src="/images/logo.png"
              alt="Logo da Clínica Veterinária Universo Pet, com ícones de cachorro, cruz e gato"
              width={220}
              height={220}
              className="h-12 w-12 object-contain sm:h-14 sm:w-14"
              priority
            />
            <span className="leading-none">
              <span className="block font-display text-2xl tracking-wide text-plum sm:text-[1.7rem]">
                UNIVERSO <span className="text-ink">PET</span>
              </span>
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-muted">
                Clínica Veterinária
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-bold ${
                    active ? "text-pink-deep" : "text-ink hover:text-plum"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={whatsappUrl(site.whatsappEmergencyMessage)}
              className="hidden rounded-full bg-pink px-4 py-2.5 text-sm font-extrabold text-ink shadow-sm hover:bg-pink-deep hover:text-white sm:inline-flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              Emergência 24h
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-plum/20 text-ink lg:hidden"
              aria-expanded={open}
              aria-controls="menu-mobile"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
              <span aria-hidden className="flex flex-col gap-1.5">
                <span className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-5 bg-current ${open ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
        {open ? (
          <nav id="menu-mobile" className="border-t border-plum/10 px-4 py-4 lg:hidden" aria-label="Mobile">
            <ul className="flex flex-col gap-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-xl px-3 py-3 text-base font-bold text-ink hover:bg-pink-soft"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={whatsappUrl(site.whatsappEmergencyMessage)}
                  className="mt-2 block rounded-full bg-pink px-4 py-3 text-center text-sm font-extrabold text-ink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Emergência 24h no WhatsApp
                </a>
              </li>
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
