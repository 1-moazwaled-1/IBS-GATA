import { useEffect } from "react";
import { useLocation } from "react-router";
import Navbar from "../componants/navbar";
import HeroSection from "../componants/heroSection";
import Services from "../componants/services";
import Products from "../componants/products";
import Contact from "../componants/contact";
import Footer from "../componants/footer";
import Testemonials from "../componants/Testemonials";
import Work from "../componants/work";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>
      <Navbar />
      <main>
        <HeroSection id="home" />
        <Services id="services" />
        <Work id="work" />
        <Products id="products" />
        <Testemonials id="testemonials" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
