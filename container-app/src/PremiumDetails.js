import React, { useEffect } from "react";
import "./PremiumDetails.scss";

const PremiumDetails = () => {
  useEffect(() => {
    const calculatePremium = async (formData, selectedProduct) => {
      debugger;
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
      debugger;
      calculatePremium(
        { ...data.detail.formData },
        { ...data.detail.selectedProduct },
      );
    };

    window.addEventListener("calPremium", calPremiumCallback);

    return () => {
      window.removeEventListener("calPremium", calPremiumCallback);
    };
  }, []);

  return (
    <div className="premium-details-container">
      <h2 className="premium-details-title">Premium Details</h2>
      <microapp1-root></microapp1-root>
    </div>
  );
};

export default PremiumDetails;
