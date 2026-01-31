import { useState } from "react";

const Addtocart = () => {
  const [cart, setCart] = useState(false);

  return (
    <img
      src="/heart.svg"
      height={25}
      width={25}
      alt="Favorite icon"
      className="favorite-icon"
    />
  );
};

export default Addtocart;
