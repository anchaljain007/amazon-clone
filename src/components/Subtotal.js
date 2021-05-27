import React from "react";
import "./css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../cart/StateProvider";
import { getBasketTotal } from "../cart/reducer";

function Subtotal() {
  const history = useHistory();
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
      <button onClick={e=> history.push('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
