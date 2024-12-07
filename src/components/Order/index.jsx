import React, { useEffect } from 'react';
import Ordersvg from "../../assets/svg/order.svg";
import "./Order.scss";

function Order() {
  useEffect(() => {
    // Анимацияны баштоо үчүн керек болсо, каалаган учурга React аркылуу эффекти баштай аласыз
  }, []);

  return (
    <div className='order container'>
      <img src={Ordersvg} alt="Order Complete" />
      <h1>Order Complete</h1>
      <h2>You Will Receive a confirmation email soon!</h2>
    </div>
  );
}

export default Order;
