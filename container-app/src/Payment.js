import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.scss";

export const Payment = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePaymentSuccess = () => {
      setTimeout(() => {
        alert("redirecting to home");
        navigate("/");
      }, 1000);
    };

    window.addEventListener("paymentSuccessful", handlePaymentSuccess);

    return () => {
      window.removeEventListener("paymentSuccessful", handlePaymentSuccess);
    };
  }, [navigate]);

  return (
    <div className="payment-container">
      <microapp2-root></microapp2-root>
    </div>
  );
};
