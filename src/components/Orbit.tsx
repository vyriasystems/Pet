import Image from "next/image";
import { CatMark, CrossMark, DogMark } from "@/components/LogoMarks";
import { site } from "@/content/site";

const satellites = [
  { deg: 0, Mark: CrossMark },
  { deg: 120, Mark: CatMark },
  { deg: 240, Mark: DogMark },
];

export function Orbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[26rem] sm:max-w-[30rem]">
      <div className="absolute inset-0 rounded-full border border-plum/10" />
      <div className="absolute inset-[7%] rounded-full border border-dashed border-plum/25" />
      <div className="absolute inset-[24%] rounded-full bg-gradient-to-br from-pink-soft via-white to-sand/30" />

      <div className="orbit-counter absolute inset-[18%]" aria-hidden>
        <span className="absolute left-0 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange" />
        <span className="absolute right-[12%] top-[8%] h-2 w-2 rounded-full bg-pink" />
      </div>

      <div className="absolute inset-[29%] overflow-hidden rounded-full bg-white shadow-card ring-8 ring-white/70">
        <Image
          src="/images/logo.png"
          alt="Logo da Clínica Veterinária Universo Pet"
          fill
          sizes="(min-width: 640px) 14rem, 12rem"
          className="object-cover"
          priority
        />
      </div>

      <div className="orbit-spin absolute inset-[7%]" aria-hidden>
        {satellites.map(({ deg, Mark }) => (
          <div key={deg} className="absolute inset-0" style={{ transform: `rotate(${deg}deg)` }}>
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <div style={{ transform: `rotate(${-deg}deg)` }}>
                <div className="orbit-counter rounded-full bg-white p-1 shadow-card">
                  <Mark className="h-12 w-12 sm:h-16 sm:w-16" decorative />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute -left-2 bottom-[12%] rounded-2xl bg-plum px-4 py-3 text-white shadow-card sm:left-0">
        <p className="font-display text-4xl leading-none">24h</p>
        <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.2em] text-white/75">Todos os dias</p>
      </div>
      <div className="absolute -right-2 top-[10%] rounded-2xl bg-white px-4 py-3 shadow-card sm:right-0">
        <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.2em] text-muted">Desde</p>
        <p className="font-display text-4xl leading-none text-plum">{site.foundedYear}</p>
      </div>
    </div>
  );
}
