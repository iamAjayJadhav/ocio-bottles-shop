import CurrencyFormat from "react-currency-format";
import "../../components/subtotal/Subtotal.css";
import { getBasketTotal } from "../../reducer";
import { useStateValue } from "../../StateProvoder";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div classname="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
