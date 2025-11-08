
import { Routes, Route, Link } from "react-router-dom";
import Products from "./pages/Products.jsx";
import ProductPage from "./pages/ProductPage.jsx";

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="p-4 bg-black text-white flex justify-between">
        <Link to="/" className="font-bold text-xl">EMI Store</Link>
        <Link to="/products">Products</Link>
      </header>
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductPage />} />
        </Routes>
      </main>
    </div>
  );
}
