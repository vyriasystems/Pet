export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`text-xs font-extrabold uppercase tracking-[0.28em] ${dark ? "text-sand" : "text-pink-deep"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-5xl leading-[0.95] sm:text-6xl ${dark ? "text-white" : "text-plum"}`}
      >
        {title}{" "}
        {accent ? (
          <span className={`font-serif font-normal italic tracking-normal ${dark ? "text-pink" : "text-pink-deep"}`}>
            {accent}
          </span>
        ) : null}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-relaxed ${dark ? "text-white/75" : "text-muted"}`}>{description}</p>
      ) : null}
    </div>
  );
}
