import React from "react";
import "./Orders.css";
import { useStateValue } from "./StateProvider";

function Orders() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {basket.map((item) => (
          <div>
            <h4>
              {item.title}
              <br />${item.price}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
