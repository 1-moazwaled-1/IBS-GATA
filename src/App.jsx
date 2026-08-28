import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./Pages/home";
import ProductDetails from "./componants/ProductDetails";
import { CartProvider } from "./context/CartContext";
import ServiceDetails from "./componants/ServiceDetails";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:serviceId" element={<ServiceDetails />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
