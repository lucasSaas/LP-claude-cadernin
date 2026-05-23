import { WHATSAPP_URL } from "@/lib/constants";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-success text-white shadow-xl shadow-emerald-900/30 transition-all hover:bg-brand-success-dark hover:scale-105 md:bottom-6 md:right-6"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full bg-brand-success/60 motion-safe:animate-ping"
      />
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
        className="relative h-7 w-7"
      >
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.46 0 .1 5.36.1 11.94c0 2.1.55 4.16 1.6 5.97L0 24l6.27-1.65a11.93 11.93 0 0 0 5.77 1.47h.01c6.58 0 11.94-5.36 11.94-11.94 0-3.19-1.24-6.18-3.47-8.4ZM12.04 21.79h-.01a9.85 9.85 0 0 1-5.02-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.24c0-5.46 4.45-9.91 9.93-9.91 2.65 0 5.14 1.03 7.01 2.91a9.83 9.83 0 0 1 2.9 7.01c0 5.46-4.45 9.84-9.98 9.84Zm5.42-7.37c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.23 1.36.19 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.07-.12-.27-.2-.57-.34Z" />
      </svg>
    </a>
  );
}
