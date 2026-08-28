import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { servicesData } from "../data/servicesData";
import Navbar from "../componants/navbar";
import Footer from "../componants/footer";
import { useLanguage } from "../context/useLanguage";

function ServiceDetails() {
  const { serviceId } = useParams();
  const { locale, t } = useLanguage();
  const [serviceInfo, setServiceInfo] = useState({
    foundService: null,
    foundCategory: null,
  });
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  useEffect(() => {
    let matchedService = null;
    let matchedCategory = null;
    for (const cat of servicesData) {
      const match = cat.services.find((s) => {
        const serviceSlug = s.title.toLowerCase().replace(/[\s/]+/g, "-");
        return serviceSlug === serviceId.toLowerCase() || s.id === serviceId;
      });
      if (match) {
        matchedService = match;
        matchedCategory = cat.category;
        break;
      }
    }
    setServiceInfo({
      foundService: matchedService,
      foundCategory: matchedCategory,
    });
  }, [serviceId, locale]);

  const { foundService, foundCategory } = serviceInfo;
  const serviceSectionT = t?.servicesData || {};
  const translatedItems = serviceSectionT?.items || {};
  const translatedCategories = serviceSectionT?.categories || {};
  const localizedService =
    foundService && translatedItems[foundService.id]
      ? {
          ...foundService,
          ...translatedItems[foundService.id],
        }
      : foundService;
  const localizedCategory =
    foundCategory && translatedCategories[foundCategory]
      ? translatedCategories[foundCategory]
      : foundCategory;

  if (!localizedService) {
    return (
      <div
        className="bg-black min-h-screen flex flex-col justify-between"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <Navbar />
        <div className="text-center py-32">
          <h2 className="text-3xl font-bold text-white">
            {serviceSectionT.notFoundTitle || "Service Not Found"}
          </h2>
          <Link
            to="/"
            className="py-3 px-6 rounded-xl bg-primary hover:bg-red-600 text-white text-sm font-medium transition-all duration-300 inline-block cursor-pointer mt-4"
          >
            {serviceSectionT.backToHome || "Back to Home"}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div
      className="bg-black min-h-screen flex flex-col justify-between"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <img
              src={localizedService.image}
              alt={localizedService.title}
              className="w-full rounded-xl shadow-md border border-primary object-cover"
            />
          </div>
          <div className="relative flex flex-col justify-between">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider block mb-2">
                {localizedCategory}
              </span>
              <h1 className="text-3xl font-bold text-white">
                {localizedService.title}
              </h1>
              <p className="text-xl text-zinc-400 mt-3 leading-relaxed">
                {localizedService.subtitle}
              </p>
            </div>
            <div className="w-full mt-8 md:mt-0">
              <a
                href="https://wa.me/201116777761"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-primary hover:bg-red-600 text-white text-sm font-medium transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg"
              >
                {serviceSectionT.requestServiceBtn || "Request Service"}
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-20 border-t border-zinc-900 pt-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            {serviceSectionT.overviewTitle || "Overview"}
          </h2>
          <p className="text-zinc-400 leading-relaxed text-lg">
            {localizedService.description}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ServiceDetails;
