import type { Metadata } from "next";
import { CatMark, CrossMark, DogMark, IconDivider } from "@/components/LogoMarks";
import { site } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Consultas, urgência 24h, cirurgias, vacinas, raio-X, ultrassom, laboratório e consultas a domicílio na Universo Pet, em Caldas Novas.",
};

export default function ServicosPage() {
  return (
    <div className="bg-canvas">
      <section className="mx-auto max-w-3xl px-4 pb-6 pt-12 text-center">
        <div className="flex justify-center gap-2">
          <DogMark className="h-12 w-12" />
          <CrossMark className="h-12 w-12" />
          <CatMark className="h-12 w-12" />
        </div>
        <h1 className="mt-5 font-display text-5xl text-plum sm:text-6xl">Serviços</h1>
        <p className="mt-4 text-base font-semibold text-muted">
          Clínica veterinária 24 horas e pet center. Valores e disponibilidade se confirmam no atendimento — não publicamos preços.
        </p>
      </section>
      <IconDivider />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-pink-deep">Plantão veterinário</p>
            <h2 className="mt-1 font-display text-4xl text-plum">Clínica 24 horas</h2>
          </div>
          <p className="text-sm font-bold text-muted">{site.clinicHours.detail}</p>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.clinicServices.map((service) => (
            <li key={service.slug} className="rounded-3xl bg-white p-6 shadow-card">
              <h3 className="font-display text-2xl tracking-wide text-plum">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-pink-soft py-12">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-pink-deep">Pet Center</p>
          <h2 className="mt-1 font-display text-4xl text-plum">Serviços do Pet Center</h2>
          <p className="mt-2 text-sm font-semibold text-muted">Horário: {site.petCenterHours.summary}</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {site.petCenterServices.map((service) => (
              <li key={service.slug} className="rounded-3xl bg-white p-6">
                <h3 className="font-display text-2xl tracking-wide text-plum">{service.title}</h3>
                <p className="mt-2 text-sm text-muted">{service.description}</p>
              </li>
            ))}
          </ul>
          <a
            href={whatsappUrl(site.whatsappPetCenterMessage)}
            className="mt-8 inline-flex rounded-full bg-pink px-5 py-3 text-sm font-extrabold text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Confirmar serviços do Pet Center
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl bg-plum p-6 text-white sm:flex sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl">Urgência agora?</h2>
            <p className="mt-2 max-w-lg text-sm text-white/80">
              Entre em contato pelo WhatsApp ou telefone. Informe o que está acontecendo com o animal para a equipe orientar o próximo passo.
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:mt-0 sm:flex-row">
            <a
              href={whatsappUrl(site.whatsappEmergencyMessage)}
              className="inline-flex items-center justify-center rounded-full bg-pink px-5 py-3 text-sm font-extrabold text-ink"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp de urgência
            </a>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-extrabold text-plum"
            >
              Ligar {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
