import React, { useState } from "react";
import { isDevEnv } from "./index";
import "./Payment.scss";

const Payment = () => {
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = () => {
    setPaymentStatus("Payment Successful!");

    if (!isDevEnv) {
      const paymentSuccessEvent = new CustomEvent("paymentSuccessful");
      window.dispatchEvent(paymentSuccessEvent);
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment Page</h2>
      <button onClick={handlePayment}>Make Payment</button>
      {paymentStatus && <p className="payment-status">{paymentStatus}</p>}
    </div>
  );
};

export default Payment;
