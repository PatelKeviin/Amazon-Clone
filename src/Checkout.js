import React, { forwardRef, useEffect } from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  const FunctionalCheckoutProduct = forwardRef((props, ref) => (
    <div ref={ref}>
      <CheckoutProduct
        id={props.id}
        title={props.title}
        price={props.price}
        rating={props.rating}
        image={props.image}
      />
    </div>
  ));

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        ></img>
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
        {/* <div className="checkout__basket">
          {basket.map((item, index) => (
            <CheckoutProduct
              key={index}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div> */}
        <div style={{ position: "relative" }}>
          <FlipMove enterAnimation="fade" leaveAnimation="fade">
            {basket.map((item, index) => (
              <FunctionalCheckoutProduct
                key={index}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </FlipMove>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
