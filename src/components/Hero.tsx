import { Orbit } from "@/components/Orbit";
import { site } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="bg-stars relative overflow-hidden bg-canvas">
      <div className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-pink-soft/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-sand/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-12 sm:pt-16 lg:grid-cols-[1.1fr_1fr] lg:gap-8 lg:pb-28">
        <div className="text-center lg:text-left">
          <p className="hero-enter inline-flex items-center gap-2 rounded-full border border-plum/15 bg-white/80 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-plum">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-deep" />
            </span>
            Aberto agora · Clínica 24h
          </p>

          <h1 className="hero-enter hero-enter-delay mt-6 font-display text-[3.6rem] leading-[0.9] text-plum sm:text-7xl lg:text-[5.6rem]">
            Cuidando com{" "}
            <span className="font-serif font-normal italic tracking-normal text-pink-deep">amor</span>
            <span className="block text-ink">e dedicação</span>
          </h1>

          <p className="hero-enter hero-enter-delay-2 mx-auto mt-6 max-w-lg text-base font-semibold leading-relaxed text-muted sm:text-lg lg:mx-0">
            Dos seus melhores amigos, desde {site.foundedYear}. Clínica veterinária 24 horas em Caldas Novas, na Curva do S —
            de dia, de noite e nos feriados.
          </p>

          <div className="hero-enter hero-enter-delay-2 mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={whatsappUrl(site.whatsappEmergencyMessage)}
              className="inline-flex w-full items-center justify-center rounded-full bg-plum px-7 py-4 text-sm font-extrabold text-white shadow-card transition hover:bg-plum-dark sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp 24h
            </a>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex w-full items-center justify-center rounded-full border-2 border-plum/20 bg-white px-7 py-4 text-sm font-extrabold text-plum transition hover:border-plum sm:w-auto"
            >
              Ligar {site.phoneDisplay}
            </a>
          </div>

          <p className="hero-enter hero-enter-delay-2 mt-6 text-sm font-semibold text-muted">
            📍 {site.address.display}
          </p>
        </div>

        <div className="hero-enter hero-enter-delay px-6 sm:px-10">
          <Orbit />
        </div>
      </div>
    </section>
  );
}
