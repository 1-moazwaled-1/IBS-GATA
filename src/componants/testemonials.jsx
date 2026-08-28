import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/useLanguage";
import { translations } from "../locales/translations";

function Testemonials() {
  const { locale } = useLanguage();
  const t = translations[locale].testimonialsSection;
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600",
  ];
  const testimonialsList = t.items.map((item, index) => ({
    ...item,
    image: images[index],
  }));
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsList.length);
  };
  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length,
    );
  };

  return (
    <section className="bg-black py-16 md:py-24 px-4 sm:px-6 md:px-16 text-white min-h-screen relative flex flex-col justify-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex items-center gap-4 mb-6 md:mb-8">
          <div className="h-[1px] w-10 sm:w-16 bg-gradient-to-r from-transparent to-primary/60"></div>
          <div className="px-3 md:px-4 py-1.5 rounded-full border border-zinc-800 bg-primary/80 backdrop-blur-md">
            <span className="text-xs sm:text-sm md:text-xl uppercase tracking-[0.2em] font-mono text-white">
              {t.badge}
            </span>
          </div>
          <div className="h-[1px] w-16 sm:w-32 bg-gradient-to-l from-transparent to-primary/60"></div>
        </div>
        <div className="mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-white mb-2">
            {t.title}
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-light text-red-500/80">
            {t.subtitle}
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 md:gap-12 bg-zinc-950/40 border border-zinc-900 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          <div className="w-full sm:w-[320px] lg:w-[360px] h-[340px] sm:h-[380px] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl flex-shrink-0 relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={testimonialsList[activeIndex].image}
                alt={testimonialsList[activeIndex].name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
          <div className="flex-1 flex flex-col justify-between w-full">
            <div className="min-h-[140px] md:min-h-[160px] mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-lg sm:text-xl md:text-2xl font-light text-zinc-200 leading-relaxed mb-6">
                    "{testimonialsList[activeIndex].quote}"
                  </p>
                  <h4 className="text-base sm:text-lg font-medium text-white">
                    {testimonialsList[activeIndex].name}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-500 font-mono mt-1">
                    {testimonialsList[activeIndex].role}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 pt-6 border-t border-zinc-900 w-full">
              <div className="flex items-center gap-3 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {testimonialsList.map((client, index) => (
                  <button
                    key={client.id}
                    onClick={() => setActiveIndex(index)}
                    className={`rounded-xl overflow-hidden transition-all duration-500 cursor-pointer border-2 w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 ${
                      index === activeIndex
                        ? "grayscale-0 border-zinc-800 scale-105 shadow-lg"
                        : "grayscale border-zinc-800 opacity-50 hover:opacity-100 hover:grayscale-0"
                    }`}
                  >
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3 self-end sm:self-auto">
                <button
                  onClick={prevTestimonial}
                  className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-900 hover:bg-red-600 hover:border-red-600 flex items-center justify-center text-white transition cursor-pointer shadow-lg"
                  aria-label="Previous Testimonial"
                >
                  <svg
                    className="w-5 h-5 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-900 hover:bg-red-600 hover:border-red-600 flex items-center justify-center text-white transition cursor-pointer shadow-lg"
                  aria-label="Next Testimonial"
                >
                  <svg
                    className="w-5 h-5 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testemonials;
