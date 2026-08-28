import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { productsData } from "../data/productsData";
import Navbar from "../componants/navbar";
import Footer from "../componants/footer";
import { useCart } from "../context/useCart";
import { useLanguage } from "../context/useLanguage";

function ProductDetails() {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const { locale, t } = useLanguage();
  const baseProduct = productsData[productId];
  const translatedProduct = t?.productsData?.[productId];
  const product =
    baseProduct && translatedProduct
      ? {
          ...baseProduct,
          ...translatedProduct,
          image: baseProduct.image,
        }
      : null;

  const [selectedOptions, setSelectedOptions] = useState({});
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  useEffect(() => {
    if (product && product.options) {
      const initial = {};
      Object.entries(product.options).forEach(([categoryName, values]) => {
        if (values && values.length > 0) {
          initial[categoryName] = values[0];
        }
      });
      setSelectedOptions(initial);
    }
  }, [productId, locale]);

  const handleSelectChange = (categoryName, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [categoryName]: value,
    }));
  };

  if (!product) {
    return (
      <div
        className="bg-black min-h-screen flex flex-col justify-between"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <Navbar />
        <div className="text-center py-32">
          <h2 className="text-3xl font-bold text-white">
            {locale === "ar" ? "المنتج غير موجود" : "Product Not Found"}
          </h2>
          <Link
            to="/"
            className="py-3 px-3 rounded-xl bg-primary hover:bg-red-600 text-white text-sm font-medium transition-all duration-300 inline-block cursor-pointer mt-4"
          >
            {locale === "ar" ? "العودة للرئيسية" : "Back to Home"}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      selectedOptions: { ...selectedOptions },
    };
    addToCart(productToAdd);
  };

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
              src={product.image}
              alt={product.name}
              className="w-full rounded-xl shadow-md border border-primary object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">{product.name}</h1>
            <span className="text-2xl text-primary font-semibold block mt-2">
              {product.price}
            </span>
            <div className="mt-6 space-y-4">
              {product.options &&
                Object.entries(product.options).map(
                  ([categoryName, values]) => (
                    <div key={categoryName}>
                      <label className="block font-medium text-white mb-1">
                        {categoryName}
                      </label>
                      <select
                        value={selectedOptions[categoryName] || ""}
                        onChange={(e) =>
                          handleSelectChange(categoryName, e.target.value)
                        }
                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-red-500 transition-colors text-sm sm:text-base"
                      >
                        {values.map((val, idx) => (
                          <option key={idx} value={val}>
                            {val}
                          </option>
                        ))}
                      </select>
                    </div>
                  ),
                )}
            </div>
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full py-4 rounded-xl bg-primary text-white text-sm font-medium transition-all duration-300 flex items-center justify-center cursor-pointer hover:bg-red-600"
            >
              {locale === "ar" ? "إضافة إلى السلة" : "Add to cart"}
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-20 border-t border-white/10 pt-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            {product.descriptionTitle}
          </h2>
          <p className="text-gray-400 leading-relaxed">
            {product.descriptionText}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProductDetails;
