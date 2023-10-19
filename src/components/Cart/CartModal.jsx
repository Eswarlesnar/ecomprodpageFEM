import Popover from "@mui/material/Popover";
import "./cartModal.css";
import { cartContext } from "../../context/cartContext";
import { useContext } from "react";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import image1 from "../../assets/image-product-1-thumbnail.jpg";

function CartModal(props) {
  const { open, onClose, anchor } = props;
  const { cartQuantity } = useContext(cartContext);

  const handleClose = () => {
    onClose();
  };
  const cartValue = (
    <div className='cart-value'>
      {cartQuantity == 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className='cart-item-details'>
            <div>
              <img src={image1} />
            </div>
            <div>
              Fall Limited Edition Sneakers
              <div>
                <span className='cart-item-original'>
                  $125 * {cartQuantity}
                </span>
                <span className='cart-item-cumulative'>{`$${
                  125 * cartQuantity
                }`}</span>
              </div>
            </div>
          </div>
          <Button>Checkout</Button>
        </>
      )}
    </div>
  );
  return (
    <Popover
      onClose={handleClose}
      open={open}
      anchorEl={anchor}
      anchorOrigin={{ vertical: 50, horizontal: -150 }}
      className='cart-modal'>
      <p className='cart-header'>cart</p>
      <Divider sx={{ width: "100%" }} />
      {cartValue}
    </Popover>
  );
}

export default CartModal;
