import Particles from "./particles";
import { useLanguage } from "../context/useLanguage";
import { translations } from "../locales/translations";

function HeroSection() {
  const { locale } = useLanguage();
  const t = translations[locale].hero;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col bg-[url('/moritz-ludtke-0Mq27r7wbXs-unsplash.jpg')] bg-cover bg-center bg-no-repeat pt-0 md:pt-24 pb-7 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
      </div>
      <div className="absolute inset-0 bg-black/50" />
      <Particles />
      <div className="relative z-10 app-container text-center flex flex-col justify-center items-center text-white flex-1">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-4xl pt-30 md:pt-0 md:text-5xl lg:text-6xl pb-4 font-bold uppercase leading-tight">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl">
            {t.subtitlePrefix}{" "}
            <span className="text-primary font-bold text-[25px] animate-glow">
              {t.subtitleHighlight}
            </span>{" "}
            {t.subtitleSuffix}
          </p>
        </div>
        <div className="flex gap-4 pt-12 animate-fade-up-delay">
          <a
            href="https://wa.me/201116777761"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary transition-all duration-200 hover:shadow-[0_0_30px_rgba(255,0,0,0.35)]"
          >
            {t.contactUs}
          </a>

          <a
            href="#products"
            className="btn-outline transition-all duration-200 hover:bg-white/10"
          >
            {t.buyNow}
          </a>
        </div>
      </div>
      <div className="relative z-10 app-container pt-[40px]">
        <div className="flex bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex-col md:flex-row justify-center items-center gap-6 text-white p-6 text-xl shadow-[0_0_40px_rgba(0,0,0,0.2)]">
          <div className="cursor-pointer text-center group transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-primary font-bold text-3xl animate-glow">
              95%
            </h3>
            <span>{t.stats.satisfaction}</span>
          </div>
          <div className="cursor-pointer text-center group transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-primary font-bold text-3xl">+1,000</h3>
            <span>{t.stats.products}</span>
          </div>
          <div className="cursor-pointer text-center group transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-primary font-bold text-3xl">+2000</h3>
            <span>{t.stats.customers}</span>
          </div>
          <div className="cursor-pointer text-center group transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-primary font-bold text-3xl">+13</h3>
            <span>{t.stats.experience}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
