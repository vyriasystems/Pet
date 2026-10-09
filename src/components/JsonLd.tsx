import { site } from "@/content/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    name: site.name,
    legalName: site.legalName,
    taxID: site.cnpj,
    description: site.description,
    telephone: site.phoneTel,
    url: site.instagramUrl,
    image: "/images/logo.png",
    foundingDate: "2018-11-14",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.street}, ${site.address.complement}`,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -17.754095,
      longitude: -48.61535,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [site.instagramUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
