const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-image">
            <img
              src={product.image}
              height={45}
              width={45}
              loading="lazy"
              alt={product.title}
            />
          </div>
          <div className="product-details">
            <div className="upper-part">
              <h4>{product.title}</h4>
              <p>{product.category}</p>
            </div>
            <div className="description">
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
