import { useEffect, useState } from "react";
import { fetchProducts } from "../services/productsApi";
import ProductGrid from "../components/ProductGrid";
import NavBar from "../components/NavBar";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <>
      <NavBar categories={categories} />
      <div>
        {loading && <p>Loading products...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && <ProductGrid products={products} />}
      </div>
    </>
  );
};

export default ProductsPage;
