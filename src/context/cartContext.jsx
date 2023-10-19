import { createContext, useState } from "react";

export const cartContext = createContext();

const CartContextProvider = (props) => {
  const [cartQuantity, setCartQuantity] = useState(0);

  const handleCartQuantity = (number) => {
    setCartQuantity(number);
  };
  return (
    <cartContext.Provider value={{ cartQuantity, handleCartQuantity }}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
