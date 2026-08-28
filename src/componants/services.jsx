import { useNavigate } from "react-router";
import {
  Code,
  Megaphone,
  Gift,
  Printer,
  Palette,
  Presentation,
  Search,
  Layers,
  Store,
  Workflow,
} from "lucide-react";
import { useLanguage } from "../context/useLanguage";
import { translations } from "../locales/translations";

function Services() {
  const { locale } = useLanguage();
  const navigate = useNavigate();
  const t = translations[locale].services;

  const iconsMap = [
    <Code className="w-6 h-6 text-red-500" />,
    <Megaphone className="w-6 h-6 text-red-500" />,
    <Gift className="w-6 h-6 text-red-500" />,
    <Printer className="w-6 h-6 text-red-500" />,
    <Palette className="w-6 h-6 text-red-500" />,
    <Presentation className="w-6 h-6 text-red-500" />,
    <Search className="w-6 h-6 text-red-500" />,
    <Layers className="w-6 h-6 text-red-500" />,
    <Store className="w-6 h-6 text-red-500" />,
    <Workflow className="w-6 h-6 text-red-500" />,
  ];

  const servicePaths = [
    "/services/corporate-websites",
    "/services/page-management",
    "/product/power-banks",
    "/product/flyers",
    "/services/logo-design",
    "/product/banners",
    "/services/ai-search-optimization",
    "/product/brochures",
    "/product/banners",
    "/services/whatsapp-automation",
  ];

  const servicesList = t.items.map((item, index) => ({
    ...item,
    icon: iconsMap[index],
    path: servicePaths[index] || `/services/services-${index + 1}`,
  }));

  return (
    <section
      id="services"
      className="relative min-h-screen w-full bg-black text-white py-24 px-4 sm:px-6 md:px-16 overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[350px] bg-red-600/10 blur-[140px] pointer-events-none rounded-full"></div>
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-16">
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-4">
          <h2 className="text-6xl sm:text-8xl font-light uppercase tracking-tighter text-white">
            {t.sectionTitle}
          </h2>
          <div className="w-24 h-1 bg-red-600 rounded-full"></div>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            {t.sectionSubtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between hover:border-red-600/50 transition-all duration-500 shadow-xl relative overflow-hidden"
            >
              <div
                className={`${locale === "en" ? "absolute top-4 right-6" : "absolute top-4 left-6"} pointer-events-none select-none`}
              >
                <span className="text-6xl font-extrabold text-white/5 tracking-tighter group-hover:text-red-500/10 transition-colors">
                  {service.id}
                </span>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 shadow-inner group-hover:bg-red-600/10 group-hover:border-red-500/30 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="border-t border-zinc-800/80 pt-4 text-zinc-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="pt-6 mt-6 border-zinc-900">
                <button
                  onClick={() => navigate(service.path)}
                  className="w-full py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group/btn"
                >
                  <span>{t.moreDetails}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
