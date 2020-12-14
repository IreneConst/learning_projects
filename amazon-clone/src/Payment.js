import React from "react";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} item(s)</Link>)
        </h1>
        {/* address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delvery address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Saint Petersburg</p>
            <p>Russian Federation</p>
          </div>
        </div>

        {/* review */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details">
            <form>
              <img
                src="https://thumb.tildacdn.com/tild3866-3362-4134-b038-643935323434/-/resize/960x/-/format/webp/stripe_shopify__.png"
                alt=""
              />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <Link to="/orders">
                  <button className="payment__button">
                    <span>Buy Now</span>
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
