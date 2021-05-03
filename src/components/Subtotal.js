import React from "react";
import "./css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import { useStateValue } from "../cart/StateProvider";
import { getBasketTotal } from "../cart/reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
        <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
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
