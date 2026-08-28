import { useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../context/useLanguage";
import { translations } from "../locales/translations";

function Contact() {
  const { locale } = useLanguage();
  const t = translations[locale].contactSection;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section
      id="contact"
      className="bg-black py-20 px-4 sm:px-6 md:px-12 lg:px-16 text-white min-h-screen relative flex flex-col justify-center overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <div className="w-[400px] sm:w-[900px] lg:w-[1500px] h-[400px] sm:h-[900px] lg:h-[400px] bg-red-600/15 blur-[150px] rounded-full"></div>
      </div>
      <div className="absolute top-4 sm:top-6 inset-x-0 flex justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="text-[18vw] sm:text-[14vw] lg:text-[10vw] font-extrabold text-zinc-700/40 uppercase">
          {t.bgWatermark}
        </span>
      </div>
      <div className="max-w-7xl mx-auto w-full relative z-10 pt-12 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-4">
                {t.title}
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
                {t.subtitle}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@ibs-gate.com"
                className="group p-4 sm:p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-xl flex items-center justify-between transition-all duration-300 hover:border-red-500/50 hover:bg-zinc-900/70"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-red-500 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm text-zinc-400 font-mono">
                      {t.emailLabel}
                    </h4>
                    <p className="text-sm sm:text-base text-white font-medium mt-0.5">
                      info@ibs-gate.com
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-red-500 group-hover:text-white group-hover:border-red-500 transition-all">
                  <svg
                    className="w-4 h-4 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </div>
              </a>
              <a
                href="https://wa.me/201116777761"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 sm:p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-xl flex items-center justify-between transition-all duration-300 hover:border-red-500/50 hover:bg-zinc-900/70"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-red-500 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm text-zinc-400 font-mono">
                      {t.phoneLabel}
                    </h4>
                    <p className="text-sm sm:text-base text-white font-medium mt-0.5">
                      +20 111 6 7777 61
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-red-500 group-hover:text-white group-hover:border-red-500 transition-all">
                  <svg
                    className="w-4 h-4 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </div>
              </a>
              <a
                href="https://www.google.com/maps/place/XCXF%2BQGM,+70+Street+157,+Al+Mintaqah+as+S%C4%81disah,+New+Cairo+1,+Cairo+Governorate+4722420/@29.9998162,31.4211906,17z/data=!4m15!1m8!3m7!1s0x14583cbe0e6414cf:0x9f42babe8f25078f!2sXCXF%2BQGM,+70+Street+157,+Al+Mintaqah+as+S%C4%81disah,+New+Cairo+1,+Cairo+Governorate+4722420!3b1!8m2!3d29.9998116!4d31.4237655!16s%2Fg%2F11v0cx1g36!3m5!1s0x14583cbe0e6414cf:0x9f42babe8f25078f!8m2!3d29.9998116!4d31.4237655!16s%2Fg%2F11v0cx1g36?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer group p-4 sm:p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-xl flex items-center justify-between transition-all duration-300 hover:border-red-500/50 hover:bg-zinc-900/70"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-red-500 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm text-zinc-400 font-mono">
                      {t.locationLabel}
                    </h4>
                    <p className="text-sm sm:text-base text-white font-medium mt-0.5">
                      {t.locationText}
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-red-500 group-hover:text-white group-hover:border-red-500 transition-all">
                  <svg
                    className="w-4 h-4 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-8 md:p-10 rounded-3xl bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={t.namePlaceholder}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors text-sm sm:text-base"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={t.emailPlaceholder}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors text-sm sm:text-base"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder={t.messagePlaceholder}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors text-sm sm:text-base resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-primary border border-zinc-800 text-white text-sm font-medium transition-all duration-300 flex items-center justify-center cursor-pointer hover:bg-red-600"
                >
                  {t.submitBtn}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
