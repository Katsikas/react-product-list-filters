import CartSummary from "../components/CartSummary";
import { useCart } from "../context/CardContext";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const navigate = useNavigate();
  const { state } = useCart();
  const { cartItems } = state;

  if (cartItems.length === 0) {
    return (
      <div>
        <h1>Your Cart is empty</h1>
        <button onClick={() => navigate("/")}>Go to Home</button>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div>
          <h1 onClick={() => navigate("/")}>Home &gt;</h1>
          <h2>Cart</h2>
        </div>
        <h1>Your Cart</h1>
      </div>
      <div>
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default Cart;
