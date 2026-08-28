import { useNavigate } from "react-router";
import { useLanguage } from "../context/useLanguage";
import { translations } from "../locales/translations";

function Products() {
  const { locale } = useLanguage();
  const navigate = useNavigate();
  const t = translations[locale].productsSection;

  const images = [
    "/notebook.webp",
    "/desk-calendar.webp",
    "/happy-new-year.webp",
    "/pen-set.webp",
    "/rollup-ibs.webp",
    "/letterhead.webp",
  ];

  const staticSlugs = [
    "corporateAgenda",
    "deskCalendar",
    "wallCalendar",
    "promotional-pens",
    "roll-up",
    "letterhead",
  ];

  const projects = t.items.map((item, index) => {
    return {
      ...item,
      image: images[index],
      slug: staticSlugs[index] || `product-${index + 1}`,
    };
  });

  return (
    <section
      id="products"
      className="relative bg-black text-white py-24 px-4 sm:px-6 md:px-16 min-h-screen overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[300px] bg-red-600/10 blur-[120px] pointer-events-none rounded-full"></div>
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
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-xl p-5 flex flex-col justify-between hover:border-red-600/50 transition-all duration-500 shadow-xl"
            >
              <div>
                <div className="overflow-hidden rounded-xl bg-zinc-900 mb-6 h-64 sm:h-72 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-xs font-mono text-white border border-zinc-800">
                    {project.id}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-white mb-6 group-hover:text-red-400 transition-colors">
                  {project.title}
                </h3>
              </div>
              <button
                onClick={() => navigate(`/product/${project.slug}`)}
                className="w-full py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group/btn"
              >
                <span>{t.viewDetail}</span>
                <svg
                  className={`w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform ${
                    locale === "ar"
                      ? "rotate-180 group-hover/btn:-translate-x-1"
                      : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
