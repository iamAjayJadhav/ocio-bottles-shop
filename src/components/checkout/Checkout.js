import "../checkout/Checkout.css";
import product3 from "../../images/product3.jpg";
import Subtotal from "../subtotal/Subtotal";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";
import { useStateValue } from "../../StateProvoder";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <h2>Shopping Basket</h2>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
