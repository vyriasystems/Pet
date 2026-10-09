import type { Metadata } from "next";
import { IconDivider } from "@/components/LogoMarks";
import { site } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contato",
  description: `Fale com a Universo Pet em Caldas Novas. WhatsApp ${site.whatsappDisplay} e telefone ${site.phoneDisplay}. Rua 14, Itaici I (Curva do S).`,
};

export default function ContatoPage() {
  return (
    <div className="bg-canvas">
      <section className="mx-auto max-w-3xl px-4 pb-6 pt-12 text-center">
        <h1 className="font-display text-5xl text-plum sm:text-6xl">Contato</h1>
        <p className="mt-4 text-base font-semibold text-muted">
          Clínica 24 horas. O caminho mais rápido é o WhatsApp, com mensagem pronta para a equipe.
        </p>
      </section>
      <IconDivider />

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-10 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          <article className="rounded-3xl bg-white p-6 shadow-card">
            <h2 className="font-display text-2xl text-plum">Telefone e WhatsApp</h2>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-muted">WhatsApp</p>
            <p className="text-2xl font-extrabold text-ink">{site.whatsappDisplay}</p>
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-muted">Telefone fixo</p>
            <p className="text-2xl font-extrabold text-ink">{site.phoneDisplay}</p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={whatsappUrl(site.whatsappAppointmentMessage)}
                className="rounded-full bg-pink px-4 py-3 text-center text-sm font-extrabold text-ink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar pelo WhatsApp
              </a>
              <a
                href={whatsappUrl(site.whatsappEmergencyMessage)}
                className="rounded-full bg-plum px-4 py-3 text-center text-sm font-extrabold text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Urgência 24h
              </a>
              <a
                href={`tel:${site.phoneTel}`}
                className="rounded-full border-2 border-plum px-4 py-3 text-center text-sm font-extrabold text-plum"
              >
                Ligar agora
              </a>
            </div>
          </article>

          <article className="rounded-3xl bg-white p-6 shadow-card">
            <h2 className="font-display text-2xl text-plum">Endereço</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {site.address.street}, {site.address.neighborhood}
              <br />
              {site.address.landmark} · {site.address.complement}
              <br />
              {site.address.city}/{site.address.state}
              <br />
              CEP: {site.address.cep}
            </p>
            <p className="mt-3 text-sm font-bold text-plum">{site.clinicHours.summary}</p>
            <p className="mt-1 text-sm text-muted">Pet Center: {site.petCenterHours.summary}</p>
            <p className="mt-3 text-sm text-muted">E-mail: {site.email}</p>
            <a
              href={site.instagramUrl}
              className="mt-2 inline-block text-sm font-extrabold text-pink-deep"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram {site.instagramHandle}
            </a>
          </article>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-card lg:col-span-3">
          <div className="relative aspect-[4/3] min-h-[280px] sm:aspect-auto sm:min-h-[480px]">
            <iframe
              title="Mapa da Universo Pet na Rua 14, Itaici I, Caldas Novas"
              src={site.mapsEmbedSrc}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
