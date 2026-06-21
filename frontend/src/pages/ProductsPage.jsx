import { useEffect, useState } from "react";
import { fetchProducts } from "../services/productsApi";
import ProductGrid from "../components/ProductGrid";
import NavBar from "../components/NavBar";
import Filters from "../components/Filters";
import Loader from "../components/Loader";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    async function getProducts() {
      setLoading(true);

      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleClearFilters = () => {
    setSelectedCategory(null);
  };

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <>
      <NavBar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
        onClearFilters={handleClearFilters}
      />
      <div className="main">
        {loading && <Loader />}
        {error && (
          <div className="error-con">
            <p>{error}</p>
            <button
              onClick={() => {
                window.location.reload();
              }}
            >
              Retry
            </button>
          </div>
        )}
        {filteredProducts && (
          <Filters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
            onClearFilters={handleClearFilters}
          />
        )}
        {!loading && !error && <ProductGrid products={filteredProducts} />}
      </div>
    </>
  );
};

export default ProductsPage;
