import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./pages/Cart";
import EmptyCartPage from "./pages/EmptyCartPage";
import NotFound from "./pages/NotFound";
import CategoriesPage from "./pages/CategoriesPage";
import Header from "./components/UI/Header";
import { ProductsContextProvider } from "./context/ProductsContext";

const App = () => {
  return (
    <ProductsContextProvider>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/empty-cart" element={<EmptyCartPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ProductsContextProvider>
  );
};

export default App;
