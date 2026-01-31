import { useState } from "react";
import Addtocart from "./Addtocart";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-card">
      <div className="product-image">
        <Addtocart />
        <img
          src={product.image}
          height={145}
          width={145}
          loading="lazy"
          alt={product.title}
        />
      </div>
      <div className="product-details">
        <div className="upper-part">
          <h3>{product.title}</h3>
          <p className="category">{product.category.toUpperCase()}</p>
        </div>

        <div className="lower-part">
          <p className="price">{product.price}€</p>
          <div className="quantity-control">
            <button
              type="button"
              className="qty-btn"
              aria-label="Decrease quantity"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              -
            </button>
            <p className="qty-value">{quantity}</p>
            <button
              type="button"
              className="qty-btn"
              aria-label="Increase quantity"
              onClick={() => setQuantity((q) => q + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
