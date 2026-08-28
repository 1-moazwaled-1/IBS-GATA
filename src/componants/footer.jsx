import { useLanguage } from "../context/useLanguage";
import { translations } from "../locales/translations";

function Footer() {
  const { locale } = useLanguage();
  const t = translations[locale].footerSection;

  return (
    <footer className="bg-black py-12 px-4 sm:px-6 md:px-12 lg:px-16 text-white relative overflow-hidden">
      <div className="max-w-9xl mx-auto rounded-3xl bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-2xl p-8 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl">
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[200px] bg-red-600/10 blur-[100px] pointer-events-none rounded-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-10 border-b border-zinc-800/80 relative z-10">
          <div className="lg:col-span-4 flex flex-col">
            <div>
              <img src="/logo W.png" alt="ibsLogo" className="w-60" />
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mt-4">
              {t.description}
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-red-500 hover:bg-zinc-800 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-red-500 hover:bg-zinc-800 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-red-500 hover:bg-zinc-800 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.13z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-red-500 hover:bg-zinc-800 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <h4 className="text-sm sm:text-lg lg:text-xl xl:text-2xl font-semibold text-white tracking-wider uppercase font-mono">
                {t.productsTitle}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {t.products.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-sm text-zinc-400 hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm sm:text-lg lg:text-xl xl:text-2xl font-semibold text-white tracking-wider uppercase font-mono">
                {t.servicesTitle}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {t.services.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-sm text-zinc-400 hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
          <p className="text-xs text-zinc-500 text-center lg:text-left">
            © 2026{" "}
            <a
              href="https://wa.me/201102888919"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Moaz Waled
            </a>
            {t.rights}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            {t.links.map((linkText, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-primary transition-colors"
              >
                {linkText}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
