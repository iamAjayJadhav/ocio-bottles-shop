import React from "react";
import { useStateValue } from "../../StateProvoder";
import "../product/Product.css";
function Product({ id, image, price, title, description }) {
  const [{ basket }, dispatch] = useStateValue();

  const addtoBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        description: description,
        image: image,
      },
    });
  };
  return (
    <div className="product">
      <img src={image} />
      <div className="product__info">
        <small>&#8377;</small>
        <strong>{price}</strong>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>

      <button onClick={addtoBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
