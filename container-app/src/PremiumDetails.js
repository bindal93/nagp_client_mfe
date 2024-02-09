import React, { useEffect } from "react";
import "./PremiumDetails.scss";
import { useNavigate } from "react-router-dom";

const PremiumDetails = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // let worker;
    // const calculatePremium = async (formData, selectedProduct) => {
    //   worker = new Worker(`${process.env.PUBLIC_URL}/calculator.worker.js`);
    //   if (worker) {
    //     worker.onmessage = function (event) {
    //       const result = event.data;
    //       const responseEvent = new CustomEvent("resolvedCalPremium", {
    //         detail: { result }
    //       });
    //       window.dispatchEvent(responseEvent);
    //       worker.terminate();
    //     };
    //     worker.postMessage({ formData, selectedProduct });
    //   }
    // };

    // const calPremiumCallback = (data) => {
    //   calculatePremium({ ...data.detail.formData }, { ...data.detail.selectedProduct });
    // };

    // window.addEventListener("calPremium", calPremiumCallback);

    const paymentCallback = () => {
      navigate("/payment");
    };

    window.addEventListener("proceedToPayment", paymentCallback);

    return () => {
      // worker?.terminate();
      // window.removeEventListener("calPremium", calPremiumCallback);
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
