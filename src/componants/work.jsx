import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useLanguage } from "../context/useLanguage";
import { translations } from "../locales/translations";

import "swiper/css";

function Work() {
  const { locale } = useLanguage();
  const t = translations[locale].worksSection;

  const works = [
    {
      id: 1,
      image: "هوية-بصرية-شركة-اعمار-1024x683.webp",
    },
    {
      id: 2,
      image: "هدايا-ترويجيه-شركة-ايرو-بيرد-1024x683.webp",
    },
    {
      id: 3,
      image: "/هدايا-شركة-نماء-1024x683.webp",
    },
    {
      id: 4,
      image: "مستلزمات-معارض-شركة-دراجون-1024x683.webp",
    },
    {
      id: 5,
      image: "مطبوعات-ورقية-شركة-هورايزون-1024x683.webp",
    },
    {
      id: 6,
      image: "موقع-اليكترونى-1024x683.webp",
    },
    {
      id: 7,
      image: "اداره-السوشيال-ميديا-1024x683.webp",
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#000000] text-zinc-100 flex flex-col justify-between px-6 md:px-16 py-20 overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 z-20 mb-10">
        <div className="flex items-baseline gap-4">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-light uppercase tracking-wider text-white">
            {t.mainTitle}
          </h2>
          <span className="text-lg md:text-xl font-mono text-red-500">
            (0{works.length})
          </span>
        </div>
        <div className="max-w-xs text-zinc-400 text-sm md:text-base leading-relaxed md:text-right self-start md:self-center">
          {t.subtitle}
        </div>
      </div>
      <div className="w-full z-20 relative my-auto">
        <Swiper
          key={locale}
          dir={locale === "ar" ? "rtl" : "ltr"}
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          grabCursor={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: ".works-next",
            prevEl: ".works-prev",
          }}
          className="w-full py-4"
        >
          {works.map((work, index) => {
            const itemData = t.items[index] || {};
            return (
              <SwiperSlide key={work.id}>
                <div className="group relative flex flex-col cursor-pointer">
                  <div className="flex items-center justify-between text-[14px] font-mono text-zinc-400 mb-3 px-1">
                    <span className="text-primary font-semibold">
                      ID // 0{work.id}
                    </span>
                    <span className="tracking-widest uppercase text-zinc-300">
                      {itemData.category}
                    </span>
                  </div>
                  <div className="w-full h-[240px] md:h-[320px] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 group-hover:border-red-600/50 transition-all duration-500 relative shadow-xl">
                    <img
                      src={work.image}
                      alt={itemData.title}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-zinc-200 mt-4 group-hover:text-primary transition-colors">
                    {itemData.title}
                  </h3>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="flex items-center justify-between mt-12 pt-6 border-t border-zinc-900 z-20">
        <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">
          {t.archive}
        </span>
        <div className="flex items-center gap-3">
          <button className="works-prev p-3 rounded-full bg-zinc-900 border border-zinc-800 text-white hover:bg-red-600 hover:border-red-600 transition cursor-pointer shadow-lg flex items-center justify-center">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={locale === "ar" ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"}
              />
            </svg>
          </button>
          <button className="works-next p-3 rounded-full bg-zinc-900 border border-zinc-800 text-white hover:bg-red-600 hover:border-red-600 transition cursor-pointer shadow-lg flex items-center justify-center">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={locale === "ar" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Work;
