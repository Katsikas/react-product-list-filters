import { useCart } from "../context/CardContext";

export default function CartItem({ item }) {
  const { dispatch } = useCart();

  return (
    <div>
      <div>
        <img src={item.image} alt={item.title} height={145} width={145} />
        <div>
          <div>
            <img
              src="/delete.svg"
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
              }
            />
          </div>
          <div>
            <span>Size:</span>
            <span>{item.size}</span>
          </div>
          <div>
            <h1>${item.price}</h1>
            <div>
              <img
                src="/remove.svg"
                onClick={() =>
                  dispatch({ type: "DECREMENT", payload: item.id })
                }
              />
              <span>{item.quantity}</span>
              <img
                src="/add.svg"
                onClick={() =>
                  dispatch({ type: "INCREMENT", payload: item.id })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
