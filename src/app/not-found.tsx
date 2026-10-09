import Link from "next/link";
import { IconTrio } from "@/components/LogoMarks";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <IconTrio />
      <h1 className="mt-6 font-display text-5xl text-plum">Página não encontrada</h1>
      <p className="mt-3 text-sm font-semibold text-muted">
        Esse endereço não existe neste site. Volte ao início ou fale com a clínica.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-full bg-pink px-5 py-3 text-sm font-extrabold text-ink"
      >
        Ir para o início
      </Link>
    </div>
  );
}
