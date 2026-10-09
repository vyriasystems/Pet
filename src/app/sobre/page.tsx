import type { Metadata } from "next";
import { IconDivider } from "@/components/LogoMarks";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { site } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Sobre",
  description: `A Universo Pet é uma clínica veterinária 24 horas e pet center em Caldas Novas, no Itaici I, desde ${site.foundedYear}.`,
};

export default function SobrePage() {
  return (
    <div className="bg-canvas">
      <section className="mx-auto max-w-3xl px-4 pb-6 pt-12 text-center">
        <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-pink-deep">Nossa história</p>
        <h1 className="mt-3 font-display text-5xl text-plum sm:text-6xl">Cuidando do seu pet em Caldas Novas</h1>
        <p className="mt-4 text-base font-semibold leading-relaxed text-muted">
          A Universo Pet nasceu em {site.foundedDate} e atende o Itaici I e toda Caldas Novas com clínica veterinária 24 horas e pet center.
        </p>
      </section>
      <IconDivider />

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2">
        <PlaceholderImage label="Foto da equipe — em breve" />
        <div className="flex flex-col justify-center">
          <h2 className="font-display text-4xl text-plum">Quem somos</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{site.description}</p>
          <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-4 shadow-card">
              <dt className="font-extrabold text-plum">Fundação</dt>
              <dd className="mt-1 text-muted">{site.foundedDate}</dd>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-card">
              <dt className="font-extrabold text-plum">Razão social</dt>
              <dd className="mt-1 text-muted">{site.legalName}</dd>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-card">
              <dt className="font-extrabold text-plum">CNPJ</dt>
              <dd className="mt-1 text-muted">{site.cnpj}</dd>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-card">
              <dt className="font-extrabold text-plum">Instagram</dt>
              <dd className="mt-1">
                <a href={site.instagramUrl} className="font-bold text-pink-deep" target="_blank" rel="noopener noreferrer">
                  {site.instagramHandle}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl bg-white p-6 shadow-card sm:p-8">
          <h2 className="font-display text-3xl text-plum">O que ainda vamos completar neste site</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>Equipe e especialidades: {site.team}</li>
            <li>Diferenciais da estrutura: {site.differentials}</li>
            <li>Internação / leitos: {site.internacao}</li>
            <li>Estacionamento: {site.parking}</li>
            <li>Acessibilidade no local: {site.accessibilityNotes}</li>
          </ul>
          <a
            href={whatsappUrl(site.whatsappDefaultMessage)}
            className="mt-6 inline-flex rounded-full bg-pink px-5 py-3 text-sm font-extrabold text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com a clínica
          </a>
        </div>
      </section>
    </div>
  );
}
