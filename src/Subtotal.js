import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <div className="subtotal__gift">
              <input type="checkbox" />{" "}
              <small>This order contains a gift</small>
            </div>
          </>
        )}
        decimalScale={2}
        value={basket.reduce(function(totalPrice, item) {
          return totalPrice + item.price;
        }, 0)}
        displayType="text"
        thousandSeparator={true}
        prefix={"$"}
      ></CurrencyFormat>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
