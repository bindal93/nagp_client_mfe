import React, { useState } from "react";
import { isDevEnv } from "./index";

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
    <div>
      <h2>Payment Page</h2>
      <button onClick={handlePayment}>Make Payment</button>
      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
};

export default Payment;
