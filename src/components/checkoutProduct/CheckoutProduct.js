import React from "react";
import { useStateValue } from "../../StateProvoder";
import "../checkoutProduct/CheckoutProduct.css";
function CheckoutProduct({ id, image, title, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkotProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <p className="title">{title}</p>
        <p>
          <small>₹</small>
          <strong>{price}</strong>
        </p>

        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}
export default CheckoutProduct;
