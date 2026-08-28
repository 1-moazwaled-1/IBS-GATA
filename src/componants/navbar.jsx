import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { useCart } from "../context/useCart";
import { useLanguage } from "../context/useLanguage";
import { translations } from "../locales/translations";

const linksConfig = [
  { key: "home", href: "#home" },
  { key: "services", href: "#services" },
  { key: "products", href: "#products" },
  { key: "contact", href: "#contact" },
];

function Navbar() {
  const { cart, totalPrice, shopMenuOpen, setShopMenuOpen, removeFromCart } =
    useCart();
  const { locale, toggleLanguage } = useLanguage();
  const [mobileMenueOpen, setMobileMenueOpen] = useState(false);
  const [searchMenueOpen, setSearchMenueOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");

    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenueOpen(false);
  };

  const t = translations[locale].navbar;
  const menuData = t.menuData;

  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
        <div className="app-container flex justify-between items-center h-16">
          <Link to="/#home" onClick={(e) => handleScrollClick(e, "#home")}>
            <img
              src="/logo W.png"
              alt="imageLogo"
              className="w-[130px] md:w-[160px]"
            />
          </Link>
          <div className="hidden md:flex items-center font-bold gap-2">
            {linksConfig.map((link) => {
              const isServicesOrProducts =
                link.key === "services" || link.key === "products";
              const dataKey = link.key === "services" ? "Services" : "Products";

              return (
                <div key={link.key} className="relative group">
                  <a
                    href={`/${link.href}`}
                    onClick={(e) => handleScrollClick(e, link.href)}
                    className="nav-item flex items-center gap-1 hover:text-primary transition cursor-pointer"
                  >
                    {t.links[link.key]}
                    {isServicesOrProducts && (
                      <svg
                        className="w-3 h-3 group-hover:rotate-180 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </a>
                  {isServicesOrProducts && (
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="absolute left-full top-0 ml-1 bg-black border border-white/10 rounded-xl p-3 w-72 shadow-2xl">
                        {menuData &&
                          menuData[dataKey] &&
                          Object.entries(menuData[dataKey]).map(
                            ([category, items]) => (
                              <div
                                key={category}
                                className="relative group/sub"
                                onMouseEnter={() => setActiveSubMenu(category)}
                                onMouseLeave={() => setActiveSubMenu(null)}
                              >
                                <div className="flex justify-between items-center px-4 py-2.5 text-sm text-white hover:bg-primary/20 hover:text-primary cursor-pointer rounded transition">
                                  {category}
                                  <span className="text-[10px]">
                                    {locale === "ar" ? "◀" : "▶"}
                                  </span>
                                </div>
                                {activeSubMenu === category && items && (
                                  <div
                                    className={`${locale === "ar" ? "absolute right-full" : "absolute left-full"} top-0 ml-1 bg-black border border-white/10 rounded-xl p-3 w-72 shadow-2xl max-h-80 overflow-y-auto`}
                                  >
                                    <ul className="space-y-2">
                                      {Array.isArray(items) &&
                                        items.map((item) => {
                                          const targetRoute =
                                            link.key === "services"
                                              ? `/services/${item.slug}`
                                              : `/product/${item.slug}`;

                                          return (
                                            <li
                                              key={item.slug}
                                              className="text-sm text-white/70 hover:text-primary cursor-pointer transition-colors border-b border-white/5 pb-1 last:border-none"
                                            >
                                              <Link
                                                to={targetRoute}
                                                className="block w-full"
                                              >
                                                {item.name}
                                              </Link>
                                            </li>
                                          );
                                        })}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            ),
                          )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            <button
              onClick={toggleLanguage}
              className="nav-item hover:text-primary cursor-pointer font-medium"
            >
              {locale === "en" ? "العربية" : "English"}
            </button>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <svg
              onClick={() => setSearchMenueOpen((prev) => !prev)}
              className="w-6 h-6 fill-current text-white cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M544 513L397.2 364.2C417.2 336.3 429.1 302 429.1 265C429.1 171.9 354.4 96.1 262.6 96.1C170.7 96 96 171.8 96 264.9C96 358 170.7 433.8 262.5 433.8C302.3 433.8 338.8 419.6 367.5 395.9L513.5 544L544 513zM262.5 394.8C191.9 394.8 134.4 336.5 134.4 264.9C134.4 193.3 191.9 135 262.5 135C333.1 135 390.6 193.3 390.6 264.9C390.6 336.5 333.2 394.8 262.5 394.8z" />
            </svg>
            <div className="h-12 w-px bg-white"></div>
            <span className="text-white">${totalPrice.toFixed(2)}EG</span>
            <button onClick={() => setShopMenuOpen((prev) => !prev)}>
              <svg
                className="w-7 h-7 cursor-pointer text-primary"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                fill="currentColor"
              >
                <path d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z" />
              </svg>
            </button>
          </div>
          <button
            onClick={() => setMobileMenueOpen((prev) => !prev)}
            className="cursor-pointer md:hidden p-2 rounded-md text-white hover:bg-white/10 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 right-0 z-40 w-64 min-h-[calc(100vh-4rem)] bg-black/85 backdrop-blur-2xl border-l border-b border-white/10 shadow-xl rounded-bl-xl px-3 pt-4 pb-5 space-y-2 transition-all duration-500 ease-in-out ${mobileMenueOpen ? "opacity-100 translate-x-0 visible" : "opacity-0 translate-x-full invisible pointer-events-none"}`}
      >
        <div onClick={() => setMobileMenueOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="w-6 fill-current text-white cursor-pointer"
          >
            <path d="M504.6 148.5C515.9 134.9 514.1 114.7 500.5 103.4C486.9 92.1 466.7 93.9 455.4 107.5L320 270L184.6 107.5C173.3 93.9 153.1 92.1 139.5 103.4C125.9 114.7 124.1 134.9 135.4 148.5L278.3 320L135.4 491.5C124.1 505.1 125.9 525.3 139.5 536.6C153.1 547.9 173.3 546.1 184.6 532.5L320 370L455.4 532.5C466.7 546.1 486.9 547.9 500.5 536.6C514.1 547.9 515.9 527.7 504.6 514.1L361.7 320L504.6 148.5z" />
          </svg>
        </div>
        <input
          placeholder={t.searchPlaceholder}
          className="w-full bg-white/10 border border-white/20 rounded-lg py-2.5 px-3 text-white placeholder:text-white/50 outline-none focus:border-primary transition"
          type="text"
        />
        {linksConfig.map((link) => (
          <a
            key={link.key}
            className="mobile-nav-item text-white hover:bg-primary block py-2 px-3 rounded transition cursor-pointer"
            href={link.href}
            onClick={(e) => handleScrollClick(e, link.href)}
          >
            {t.links[link.key]}
          </a>
        ))}
        <button
          onClick={toggleLanguage}
          className="nav-item hover:text-primary cursor-pointer font-medium pt-2 block"
        >
          {locale === "en" ? "العربية" : "English"}
        </button>
      </div>
      <div
        className={`w-72 sm:w-90 fixed top-16 right-0 z-40 min-h-[calc(100vh-4rem)] bg-black/85 backdrop-blur-2xl border-l border-b border-white/10 shadow-xl rounded-bl-xl px-3 pt-4 pb-5 space-y-2 transition-all duration-500 ease-in-out ${shopMenuOpen ? "opacity-100 translate-x-0 visible" : "opacity-0 translate-x-full invisible pointer-events-none"}`}
      >
        <div onClick={() => setShopMenuOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="w-6 fill-current text-white cursor-pointer"
          >
            <path d="M504.6 148.5C515.9 134.9 514.1 114.7 500.5 103.4C486.9 92.1 466.7 93.9 455.4 107.5L320 270L184.6 107.5C173.3 93.9 153.1 92.1 139.5 103.4C125.9 114.7 124.1 134.9 135.4 148.5L278.3 320L135.4 491.5C124.1 505.1 125.9 525.3 139.5 536.6C153.1 547.9 173.3 546.1 184.6 532.5L320 370L455.4 532.5C466.7 546.1 486.9 547.9 500.5 536.6C514.1 547.9 515.9 527.7 504.6 514.1L361.7 320L504.6 148.5z" />
          </svg>
        </div>
        <input
          placeholder={t.searchPlaceholder}
          className="w-full bg-white/10 border border-white/20 rounded-lg py-2.5 px-3 text-white placeholder:text-white/50 outline-none focus:border-primary transition"
          type="text"
        />
        {cart.length === 0 ? (
          <div className="flex justify-center items-center flex-col pt-30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="fill-current text-white w-20 h-20"
            >
              <path d="M0 72C0 58.7 10.7 48 24 48L69.3 48C96.4 48 119.6 67.4 124.4 94L124.8 96L312 96L312 198.1L281 167.1C271.6 157.7 256.4 157.7 247.1 167.1C237.8 176.5 237.7 191.7 247.1 201L319.1 273C328.5 282.4 343.7 282.4 353 273L425 201C434.4 191.6 434.4 176.4 425 167.1C415.6 157.8 400.4 157.7 391.1 167.1L360.1 198.1L360.1 96L537.5 96C557.5 96 572.6 114.2 568.9 133.9L537.8 299.8C532.1 330.1 505.7 352 474.9 352L171.3 352L176.4 380.3C178.5 391.7 188.4 400 200 400L456 400C469.3 400 480 410.7 480 424C480 437.3 469.3 448 456 448L200.1 448C165.3 448 135.5 423.1 129.3 388.9L77.2 102.6C76.5 98.8 73.2 96 69.3 96L24 96C10.7 96 0 85.3 0 72z" />
            </svg>
            <span className="text-base text-white font-bold pt-5 text-center">
              {t.cart.empty}
            </span>
          </div>
        ) : (
          <div className="space-y-3 pt-2">
            <div className="max-h-[50vh] overflow-y-auto space-y-2 pr-1">
              {cart.map((item, index) => {
                const uniqueKey = item.id || `${item.name}-${index}`;
                const options = item.selectedOptions || {};
                const optionEntries = Object.entries(options).filter(
                  ([_, value]) => value,
                );
                return (
                  <div
                    key={uniqueKey}
                    className="bg-white/5 border border-white/10 rounded-lg p-3 flex items-start justify-between gap-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-md object-cover border border-white/10 shrink-0 mt-1"
                    />
                    <div className="flex-1 min-w-0 flex flex-col justify-start">
                      <h4 className="text-white font-semibold text-sm truncate">
                        {item.name}
                      </h4>
                      <span className="text-primary font-bold text-xs mt-0.5 border-b border-white/15">
                        {item.price}
                      </span>
                      {optionEntries.length > 0 && (
                        <div className="  text-xs text-white/75 space-y-1 ">
                          {optionEntries.map(([key, value]) => (
                            <div key={key} className="">
                              <span className="pr-1  text-white/50 capitalize font-medium">
                                {key}:
                              </span>
                              <span className="text-white font-bold">
                                {String(value)}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-white/60 hover:text-red-400 transition cursor-pointer p-1"
                      aria-label="Remove item"
                    >
                      ✕
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="absolute bottom-2 w-full p-5">
              <div className="border-t pt-1 border-white/15 flex justify-between items-center text-white font-bold text-base">
                <span>{t.cart.total}</span>
                <span className="text-primary">
                  ${totalPrice.toFixed(2)} EG
                </span>
              </div>
              <button className="mt-4 w-full py-2.5 rounded-xl bg-primary text-white text-sm font-medium transition flex items-center justify-center cursor-pointer">
                {t.cart.checkout}
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Search Menu */}
      <div
        className={`hidden sm:block w-full min-h-screen fixed top-16 right-0 z-40 bg-black/85 backdrop-blur-2xl border-l border-b border-white/10 shadow-xl rounded-bl-xl px-3 pt-4 pb-5 space-y-2 transition-all duration-500 ease-in-out ${searchMenueOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-5 invisible pointer-events-none"}`}
      >
        <div>
          <div className="flex justify-between items-center py-3">
            <h2 className="text-xl text-white font-bold">
              {t.searchMenu.title}
            </h2>
            <svg
              onClick={() => setSearchMenueOpen(false)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-6 fill-current text-white cursor-pointer"
            >
              <path d="M504.6 148.5C515.9 134.9 514.1 114.7 500.5 103.4C486.9 92.1 466.7 93.9 455.4 107.5L320 270L184.6 107.5C173.3 93.9 153.1 92.1 139.5 103.4C125.9 114.7 124.1 134.9 135.4 148.5L278.3 320L135.4 491.5C124.1 505.1 125.9 525.3 139.5 536.6C153.1 547.9 173.3 546.1 184.6 532.5L320 370L455.4 532.5C466.7 546.1 486.9 547.9 500.5 536.6C514.1 547.9 515.9 527.7 504.6 514.1L361.7 320L504.6 148.5z" />
            </svg>
          </div>
          <div className="w-full h-[0.5px] bg-white" />
          <div className="pt-8 flex justify-center items-center gap-2">
            <input
              placeholder={t.searchPlaceholder}
              className="w-150 bg-white/10 border border-white/20 rounded-lg py-2.5 px-3 text-white placeholder:text-white/50 outline-none focus:border-primary transition"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
