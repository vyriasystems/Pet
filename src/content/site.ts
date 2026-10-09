/**
 * Fonte única de textos e dados da clínica.
 * Onde a informação ainda não foi confirmada, use exatamente "[PREENCHER]".
 * Não inventar preços, equipe, depoimentos, certificações ou capacidade.
 */

export const PLACEHOLDER = "[PREENCHER]";

export const site = {
  name: "Universo Pet",
  legalName: "Clinica Veterinaria Universo Pet Ltda",
  cnpj: "32.059.458/0001-02",
  tagline: "Clínica Veterinária",
  city: "Caldas Novas",
  state: "GO",
  foundedYear: 2018,
  foundedDate: "14/11/2018",
  description:
    "Clínica veterinária 24 horas e pet center em Caldas Novas (GO), no bairro Itaici I (Curva do S). Cuidado veterinário todos os dias, inclusive madrugada, feriados e fins de semana.",
  phoneDisplay: "(64) 3322-4048",
  phoneTel: "+556433224048",
  whatsappE164: "5564992066869",
  whatsappDisplay: "(64) 99206-6869",
  instagramHandle: "@universopetcn",
  instagramUrl: "https://www.instagram.com/universopetcn/",
  facebookUrl: "https://www.facebook.com/clinicaveterinariauniversopet",
  bio: "Cuidando com amor e dedicação dos seus melhores amigos desde 2018.",
  email: PLACEHOLDER,
  address: {
    street: "Rua 14",
    neighborhood: "Itaici I",
    landmark: "Curva do S",
    complement: "Quadra 17, Lote 15, Sala 3",
    city: "Caldas Novas",
    state: "GO",
    cep: "75686-003",
    display: "Rua 14, Itaici I (Curva do S) — Caldas Novas, GO",
  },
  geo: { lat: -17.7540953, lng: -48.6153499 },
  mapsQuery: "Universo Pet Clínica Veterinária Rua 14 Itaici I Curva do S Caldas Novas GO",
  mapsEmbedSrc: "https://maps.google.com/maps?q=-17.7540953,-48.6153499&z=17&output=embed",
  mapsUrl:
    "https://www.google.com/maps/place/Universo+Pet+Cl%C3%ADnica+Veterin%C3%A1ria+24+h/@-17.7540953,-48.6153499,17z",
  clinicHours: {
    label: "Clínica veterinária",
    summary: "Atendimento 24 horas, todos os dias",
    detail: "Aberto 24 horas de domingo a sábado, inclusive feriados.",
  },
  petCenterHours: {
    label: "Pet Center",
    summary: PLACEHOLDER,
    detail: PLACEHOLDER,
  },
  whatsappDefaultMessage:
    "Olá, Universo Pet! Gostaria de falar com a clínica veterinária.",
  whatsappEmergencyMessage:
    "Olá, Universo Pet! Preciso de atendimento veterinário de urgência.",
  whatsappAppointmentMessage:
    "Olá, Universo Pet! Gostaria de agendar um atendimento.",
  whatsappPetCenterMessage:
    "Olá, Universo Pet! Gostaria de informações sobre o Pet Center.",
  whatsappDirectionsMessage:
    "Olá, Universo Pet! Preciso de ajuda para chegar à clínica (Rua 14, Itaici I — Curva do S).",
  clinicServices: [
    {
      slug: "consultas",
      title: "Consultas",
      description:
        "Atendimento clínico para cães e gatos, com orientação para o tutor.",
    },
    {
      slug: "emergencia",
      title: "Urgência e emergência 24h",
      description:
        "Plantão veterinário todos os dias, inclusive de madrugada, fins de semana e feriados.",
    },
    {
      slug: "cirurgias",
      title: "Cirurgias em geral",
      description: "Procedimentos cirúrgicos veterinários conforme avaliação clínica.",
    },
    {
      slug: "vacinas",
      title: "Vacinas",
      description: "Imunização de cães e gatos conforme indicação veterinária.",
    },
    {
      slug: "raio-x",
      title: "Raio-X",
      description: "Exame de imagem por radiografia, quando indicado pelo veterinário.",
    },
    {
      slug: "ultrassom",
      title: "Ultrassom",
      description: "Exame de imagem por ultrassonografia, quando indicado pelo veterinário.",
    },
    {
      slug: "laboratorio",
      title: "Laboratório",
      description: "Apoio diagnóstico laboratorial para o acompanhamento clínico.",
    },
    {
      slug: "domicilio",
      title: "Consultas a domicílio",
      description:
        "Atendimento veterinário em domicílio. Confirme disponibilidade e área de cobertura pelo WhatsApp.",
    },
  ],
  petCenterServices: [
    {
      slug: "pet-center-1",
      title: PLACEHOLDER,
      description: PLACEHOLDER,
    },
    {
      slug: "pet-center-2",
      title: PLACEHOLDER,
      description: PLACEHOLDER,
    },
    {
      slug: "pet-center-3",
      title: PLACEHOLDER,
      description: PLACEHOLDER,
    },
  ],
  instagramHighlights: [
    {
      slug: "pacientes",
      icon: "paw",
      title: "Pacientes",
      description: "Os bichinhos que passaram por aqui e as histórias de recuperação.",
    },
    {
      slug: "equipe",
      icon: "team",
      title: "Equipe",
      description: "Quem cuida do seu pet, de dia, de noite e nos feriados.",
    },
    {
      slug: "clinica",
      icon: "house",
      title: "Clínica",
      description: "Nossa estrutura no Itaici I, pronta para receber você.",
    },
    {
      slug: "cirurgias",
      icon: "cross",
      title: "Cirurgias",
      description: "Bastidores dos procedimentos, com técnica e carinho.",
    },
  ],
  team: PLACEHOLDER,
  differentials: PLACEHOLDER,
  internacao: PLACEHOLDER,
  parking: PLACEHOLDER,
  accessibilityNotes: PLACEHOLDER,
} as const;

export const nav = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contato", label: "Contato" },
] as const;

export const seo = {
  title: "Universo Pet | Clínica Veterinária 24h em Caldas Novas",
  description:
    "Clínica veterinária 24 horas e pet center em Caldas Novas (GO). Rua 14, Itaici I (Curva do S). WhatsApp (64) 3322-4048.",
  locale: "pt_BR",
  url: PLACEHOLDER, // definir NEXT_PUBLIC_SITE_URL no deploy (ex.: https://seu-dominio.vercel.app)
};
