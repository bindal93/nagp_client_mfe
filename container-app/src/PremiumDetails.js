import React, { useEffect } from "react";
import "./PremiumDetails.scss";
import { useNavigate } from "react-router-dom";

const PremiumDetails = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const calculatePremium = async (formData, selectedProduct) => {
      const { calculatePremiumWorker } = await import(
        "./assets/calculator.worker.js"
      );
      const result = calculatePremiumWorker(formData, selectedProduct);
      const responseEvent = new CustomEvent("resolvedCalPremium", {
        detail: { result },
      });
      window.dispatchEvent(responseEvent);
    };

    const calPremiumCallback = (data) => {
      calculatePremium(
        { ...data.detail.formData },
        { ...data.detail.selectedProduct },
      );
    };

    window.addEventListener("calPremium", calPremiumCallback);

    const paymentCallback = () => {
      navigate("/payment");
    };

    window.addEventListener("proceedToPayment", paymentCallback);

    return () => {
      window.removeEventListener("calPremium", calPremiumCallback);
      window.removeEventListener("proceedToPayment", paymentCallback);
    };
  }, [navigate]);

  return (
    <div className="premium-details-container">
      <h2 className="premium-details-title">Premium Details</h2>
      <microapp1-root></microapp1-root>
    </div>
  );
};

export default PremiumDetails;
