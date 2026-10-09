import { site } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl(site.whatsappDefaultMessage)}
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-extrabold text-white shadow-lg hover:brightness-95"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversa no WhatsApp com a Universo Pet"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden fill="currentColor">
        <path d="M20.5 3.5A11 11 0 0 0 2.1 17.7L1 23l5.4-1.1A11 11 0 0 0 12 23a11 11 0 0 0 8.5-19.5ZM12 21a9 9 0 0 1-4.6-1.3l-.3-.2-3.2.7.7-3.1-.2-.3A9 9 0 1 1 12 21Zm5-6.7c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.1-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.5-.8-2s-.4-.5-.6-.5h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.8 11.8 0 0 0 4.5 4 15 15 0 0 0 1.5.5 3.6 3.6 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .1-1.3c-.1-.1-.3-.2-.5-.2Z" />
      </svg>
      WhatsApp
    </a>
  );
}
