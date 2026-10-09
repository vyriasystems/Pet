import Image from "next/image";
import Link from "next/link";
import { IconTrio } from "@/components/LogoMarks";
import { nav, site } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-plum-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Logo Universo Pet"
              width={160}
              height={160}
              className="h-14 w-14 rounded-full bg-white object-contain p-1"
            />
            <div>
              <p className="font-display text-3xl leading-none tracking-wide">
                UNIVERSO <span className="text-sand">PET</span>
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                Clínica Veterinária · desde {site.foundedYear}
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80">{site.description}</p>
          <IconTrio size="h-10 w-10" className="mt-5 justify-start" />
        </div>

        <div>
          <h2 className="font-display text-2xl tracking-wide">Navegação</h2>
          <ul className="mt-3 space-y-2 text-sm font-semibold">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl tracking-wide">Contato</h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/80">
            <li>
              <a href={`tel:${site.phoneTel}`} className="font-bold text-white hover:text-pink">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={whatsappUrl()} className="hover:text-white" target="_blank" rel="noopener noreferrer">
                WhatsApp {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={site.instagramUrl} className="hover:text-white" target="_blank" rel="noopener noreferrer">
                Instagram {site.instagramHandle}
              </a>
            </li>
            <li>
              <a href={site.facebookUrl} className="hover:text-white" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>{site.address.display}</li>
            <li>CNPJ {site.cnpj}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {site.name} · Caldas Novas, Goiás
      </div>
    </footer>
  );
}
