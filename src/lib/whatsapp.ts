import { site } from "@/content/site";

export function whatsappUrl(message: string = site.whatsappDefaultMessage): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.whatsappE164}?text=${text}`;
}
