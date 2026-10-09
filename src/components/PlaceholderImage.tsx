import { CatMark, CrossMark, DogMark } from "@/components/LogoMarks";

export function PlaceholderImage({
  label = "Foto em breve",
  className = "",
  ratioClass = "aspect-[16/10]",
}: {
  label?: string;
  className?: string;
  ratioClass?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-pink-soft ${ratioClass} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
        <div className="flex items-center gap-2">
          <DogMark className="h-12 w-12" decorative />
          <CrossMark className="h-12 w-12" decorative />
          <CatMark className="h-12 w-12" decorative />
        </div>
        <p className="text-center text-sm font-semibold text-muted">{label}</p>
      </div>
    </div>
  );
}
