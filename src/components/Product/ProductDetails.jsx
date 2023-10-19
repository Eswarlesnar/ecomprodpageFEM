import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import iconCart from "../../../public/assets/icon-cart.svg";
import { cartContext } from "../../context/cartContext";
import "./productDetails.css";

const ProductDetails = () => {
  const [productCount, setProductCount] = useState(0);

  const handleProductCount = (type) => {
    if (type === "add") {
      setProductCount((prev) => prev + 1);
    } else {
      if (productCount >= 1) {
        setProductCount((prev) => prev - 1);
      }
    }
  };

  const handleAddtoCart = () => {
    if (productCount === 0) {
      return;
    }
    handleCartQuantity(productCount);
    setProductCount(0);
  };
  const { handleCartQuantity } = useContext(cartContext);
  return (
    <div className='product-details'>
      <p className='product-company'>Sneaker Company</p>
      <h1 className='product-name'>Fall Limited Edition Sneakers</h1>
      <p className='product-description'>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className='product-price'>
        <div className='product-offer-container'>
          <span className='product-offer-price'>$125.00</span>
          <span className='product-offer-percent'>50%</span>
        </div>
        <p className='product-actual-price'>$250.00</p>
      </div>
      <div className='product-addtocart'>
        <div className='product-quantity-changer'>
          <Button onClick={() => handleProductCount("remove")}>-</Button>
          <span>{productCount}</span>
          <Button onClick={() => handleProductCount("add")}>+</Button>
        </div>
        <Button className='button-addtocart' onClick={handleAddtoCart}>
          <span>
            <img src={iconCart} alt='cart' />
          </span>
          <span>Add to Cart</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
