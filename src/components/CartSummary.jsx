import { useCart } from "../context/CardContext";

export default function CartSummary() {
  const { state } = useCart();
  const { cartItems } = state;

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const subTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const discount = subTotal * 0.2;
  const deliveryFee = 15;

  const total = subTotal - discount + deliveryFee;

  return (
    <div>
      <h1>Order Summary</h1>
      <div>
        <div>
          <p>Subtotal</p>
          <p>${subTotal}</p>
        </div>

        <div>
          <p>Total Items</p>
          <p>${totalItems}</p>
        </div>

        <div>
          <p>Discount (-20%)</p>
          <p>${discount}</p>
        </div>

        <div>
          <p>Delivery Fee</p>
          <p>{deliveryFee}</p>
        </div>
      </div>

      <div>
        <p>Total</p>
        <p>${total}</p>
      </div>

      <button>Go to Checkout</button>
    </div>
  );
}
