import Link from "next/link";
import { NotebookPen } from "lucide-react";
import { WHATSAPP_URL, BRAND_NAME } from "@/lib/constants";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.46 0 .1 5.36.1 11.94c0 2.1.55 4.16 1.6 5.97L0 24l6.27-1.65a11.93 11.93 0 0 0 5.77 1.47h.01c6.58 0 11.94-5.36 11.94-11.94 0-3.19-1.24-6.18-3.47-8.4ZM12.04 21.79h-.01a9.85 9.85 0 0 1-5.02-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.24c0-5.46 4.45-9.91 9.93-9.91 2.65 0 5.14 1.03 7.01 2.91a9.83 9.83 0 0 1 2.9 7.01c0 5.46-4.45 9.84-9.98 9.84Zm5.42-7.37c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.23 1.36.19 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.07-.12-.27-.2-.57-.34Z" />
    </svg>
  );
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.83a8.16 8.16 0 0 0 4.77 1.53V6.91a4.85 4.85 0 0 1-1.84-.22Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-primary text-white">
              <NotebookPen className="h-5 w-5" aria-hidden />
            </span>
            <span className="font-heading text-lg font-extrabold">{BRAND_NAME}</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            O sistema mais simples pra quem ainda anota venda no caderno.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-800 text-slate-300 transition-colors hover:bg-brand-primary hover:text-white"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-800 text-slate-300 transition-colors hover:bg-brand-success hover:text-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-800 text-slate-300 transition-colors hover:bg-white hover:text-slate-900"
            >
              <TikTokIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-white">
            Produto
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#funcionalidades" className="text-slate-400 hover:text-white">Funcionalidades</a></li>
            <li><a href="#preco" className="text-slate-400 hover:text-white">Preço</a></li>
            <li><a href="#faq" className="text-slate-400 hover:text-white">FAQ</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white">Atualizações</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-white">
            Empresa
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="text-slate-400 hover:text-white">Sobre nós</a></li>
            <li><a href={WHATSAPP_URL} className="text-slate-400 hover:text-white">Contato</a></li>
            <li><a href={WHATSAPP_URL} className="text-slate-400 hover:text-white">Suporte</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-white">
            Legal
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/termos" className="text-slate-400 hover:text-white">Termos de uso</Link></li>
            <li><Link href="/privacidade" className="text-slate-400 hover:text-white">Política de privacidade</Link></li>
            <li><Link href="/privacidade" className="text-slate-400 hover:text-white">LGPD</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        {/* TODO: adicionar CNPJ quando empresa estiver formalizada */}
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-slate-500 md:px-6">
          © {new Date().getFullYear()} {BRAND_NAME} · Feito no Brasil 🇧🇷
        </div>
      </div>
    </footer>
  );
}
