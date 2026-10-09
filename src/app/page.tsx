import Link from "next/link";
import { Hero } from "@/components/Hero";
import { HighlightIcon } from "@/components/HighlightIcon";
import { IconTrio } from "@/components/LogoMarks";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";

const trust = [
  { value: "24h", label: "Plantão todos os dias, inclusive feriados" },
  { value: String(site.foundedYear), label: "Cuidando de Caldas Novas desde então" },
  { value: "Cães & gatos", label: "Clínica, cirurgia, exames e vacinas" },
  { value: "Domicílio", label: "Também atendemos na sua casa" },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section aria-label="Destaques da clínica" className="relative z-10 -mt-10 px-4">
        <ul className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-3xl bg-plum/10 shadow-card sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((item) => (
            <li key={item.value} className="bg-white p-6">
              <p className="font-display text-4xl leading-none text-plum">{item.value}</p>
              <p className="mt-2 text-sm font-semibold leading-snug text-muted">{item.label}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Serviços"
            title="Tudo o que eles precisam,"
            accent="num só lugar"
            description="Do check-up à emergência de madrugada. Valores e disponibilidade são confirmados pelo WhatsApp."
          />
          <Link href="/servicos" className="shrink-0 text-sm font-extrabold text-pink-deep hover:underline">
            Ver todos os serviços →
          </Link>
        </div>

        <ul className="mt-12 grid grid-flow-dense gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.clinicServices.map((service, index) => {
            const featured = service.slug === "emergencia";
            return (
              <li
                key={service.slug}
                className={`group rounded-3xl p-6 transition hover:-translate-y-1 ${
                  featured
                    ? "bg-plum text-white shadow-card sm:col-span-2"
                    : "border border-plum/10 bg-white hover:shadow-card"
                }`}
              >
                <p className={`font-serif text-sm italic ${featured ? "text-pink" : "text-pink-deep"}`}>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className={`mt-6 font-display text-3xl leading-none ${featured ? "text-white" : "text-plum"}`}>
                  {service.title}
                </h3>
                <p className={`mt-3 text-sm leading-relaxed ${featured ? "text-white/80" : "text-muted"}`}>
                  {service.description}
                </p>
                {featured ? (
                  <a
                    href={whatsappUrl(site.whatsappEmergencyMessage)}
                    className="mt-6 inline-flex rounded-full bg-pink px-5 py-2.5 text-sm font-extrabold text-ink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chamar agora
                  </a>
                ) : null}
              </li>
            );
          })}
        </ul>
      </section>

      <section className="bg-stars-light relative overflow-hidden bg-plum-dark py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10" />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <IconTrio size="h-12 w-12" />
          <blockquote className="mt-10">
            <p className="font-serif text-3xl font-light italic leading-snug sm:text-5xl">“{site.bio}”</p>
          </blockquote>
          <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.28em] text-sand">
            Universo Pet · Caldas Novas
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <SectionHeading
          eyebrow="Nosso universo"
          title="Por dentro da"
          accent="Universo Pet"
          description="Os bastidores da clínica, contados no nosso Instagram."
          align="center"
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.instagramHighlights.map((item) => (
            <li key={item.slug}>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col items-center rounded-3xl border border-plum/10 bg-white p-8 text-center transition hover:-translate-y-1 hover:shadow-card"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-plum text-white ring-4 ring-pink-soft ring-offset-4 transition group-hover:ring-pink">
                  <HighlightIcon name={item.icon} className="h-9 w-9" />
                </span>
                <h3 className="mt-6 font-display text-3xl text-plum">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                <span className="mt-auto pt-5 text-xs font-extrabold uppercase tracking-[0.18em] text-pink-deep">
                  Ver no Instagram →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-4">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-pink px-6 py-14 sm:px-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/20" />
          <div className="pointer-events-none absolute -bottom-24 right-40 h-48 w-48 rounded-full bg-pink-deep/30" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-plum-dark">Emergência</p>
              <h2 className="mt-3 font-display text-5xl leading-[0.95] text-ink sm:text-6xl">
                Madrugada, feriado ou domingo:{" "}
                <span className="font-serif font-normal italic tracking-normal">estamos aqui.</span>
              </h2>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={whatsappUrl(site.whatsappEmergencyMessage)}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-plum-dark px-7 py-4 text-sm font-extrabold text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp {site.whatsappDisplay}
              </a>
              <a
                href={`tel:${site.phoneTel}`}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white px-7 py-4 text-sm font-extrabold text-plum-dark"
              >
                Ligar {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-20 sm:py-28 lg:grid-cols-[1fr_1.4fr] lg:items-stretch">
        <div className="flex flex-col">
          <SectionHeading eyebrow="Visite" title="Na Curva do S," accent="no Itaici I" />
          <dl className="mt-8 space-y-5 text-sm">
            <div>
              <dt className="font-extrabold uppercase tracking-[0.18em] text-muted">Endereço</dt>
              <dd className="mt-1 text-base font-semibold text-ink">
                {site.address.street}, {site.address.neighborhood} · {site.address.city}/{site.address.state}
                <br />
                CEP {site.address.cep}
              </dd>
            </div>
            <div>
              <dt className="font-extrabold uppercase tracking-[0.18em] text-muted">Horário</dt>
              <dd className="mt-1 text-base font-semibold text-ink">{site.clinicHours.detail}</dd>
            </div>
            <div>
              <dt className="font-extrabold uppercase tracking-[0.18em] text-muted">Contato</dt>
              <dd className="mt-1 text-base font-semibold text-ink">
                WhatsApp {site.whatsappDisplay} · Fixo {site.phoneDisplay}
              </dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3 lg:mt-auto lg:pt-8">
            <a
              href={site.mapsUrl}
              className="inline-flex rounded-full bg-plum px-6 py-3 text-sm font-extrabold text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir no Google Maps
            </a>
            <a
              href={site.instagramUrl}
              className="inline-flex rounded-full border-2 border-plum/20 px-6 py-3 text-sm font-extrabold text-plum hover:border-plum"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href={site.facebookUrl}
              className="inline-flex rounded-full border-2 border-plum/20 px-6 py-3 text-sm font-extrabold text-plum hover:border-plum"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-plum/10 bg-white p-2 shadow-card">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] lg:aspect-auto lg:h-full lg:min-h-[420px]">
            <iframe
              title="Mapa da Universo Pet em Caldas Novas"
              src={site.mapsEmbedSrc}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
