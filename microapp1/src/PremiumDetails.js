import React, { useCallback, useEffect, useState } from "react";
import MockInsuranceProducts from "./assets/insuranceProducts.json";
import { isDevEnv } from "./index.js";
import "./PremiumDetails.scss";

const PremiumDetails = () => {
  const [selectedProduct, setSelectedProduct] = useState(
    MockInsuranceProducts[0],
  );
  const [formData, setFormData] = useState({ age: "", coverageAmount: "" });
  const [premiumResult, setPremiumResult] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handleProductChange = (productId) => {
    const selected = MockInsuranceProducts.find(
      (product) => product.id === productId,
    );
    setSelectedProduct(selected);
  };

  const handleFormChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const calPremiumCallback = (eventData) => {
    setPremiumResult(eventData.detail.result);
  };

  const handlePayment = () => {
    if (isDevEnv) {
      setPaymentStatus("Payment Successful!");
    } else {
      const paymentEvent = new CustomEvent("proceedToPayment");
      window.dispatchEvent(paymentEvent);
    }
  };

  const calculatePremium = useCallback(async () => {
    let worker;
    // if (isDevEnv) {
    worker = new Worker(`${process.env.PUBLIC_URL}/calculator.worker.js`);
    if (worker) {
      worker.onmessage = function (event) {
        const result = event.data;
        setPremiumResult(result);
        worker.terminate();
      };
      worker.postMessage({ formData, selectedProduct });
    }
    // } else {
    //   const calPremium = new CustomEvent("calPremium", {
    //     detail: { formData, selectedProduct }
    //   });
    //   window.dispatchEvent(calPremium);

    //   window.addEventListener("resolvedCalPremium", calPremiumCallback);

    //   return () => {
    //     worker?.terminate();
    //     window.removeEventListener("resolvedCalPremium", calPremiumCallback);
    //   };
    // }
  }, [formData, selectedProduct]);

  useEffect(() => {
    return () => {
      window.removeEventListener("resolvedCalPremium", calPremiumCallback);
    };
  }, []);

  return (
    <div className="insurance-container">
      <h2>Insurance Products</h2>
      <ul className="product-list">
        {MockInsuranceProducts.map((product) => (
          <li key={product.id} className="product-item">
            <label className="product-label">
              <input
                type="radio"
                value={product.id}
                checked={selectedProduct.id === product.id}
                onChange={() => handleProductChange(product.id)}
                className="product-radio"
              />
              {product.name}
            </label>
          </li>
        ))}
      </ul>

      <div className="selected-product-details">
        <h2>Selected Product Details</h2>
        <div>
          <strong>Name:</strong> {selectedProduct.name}
          <br />
          <strong>Coverage:</strong> {selectedProduct.coverage}
          <br />
          <strong>Premium:</strong> {selectedProduct.premium}
        </div>
      </div>

      <div className="quote-form">
        <h2>Insurance Quote Form</h2>
        <form>
          <label>
            Age:
            <input
              type="number"
              value={formData.age}
              onChange={(e) => handleFormChange("age", e.target.value)}
            />
          </label>
          <br />
          <label>
            Coverage Amount:
            <input
              type="number"
              value={formData.coverageAmount}
              onChange={(e) =>
                handleFormChange("coverageAmount", e.target.value)
              }
            />
          </label>
        </form>
        <button onClick={calculatePremium}>Calculate Premium</button>
        {premiumResult && (
          <>
            <div className="premium-result">{premiumResult}</div>
            <button onClick={handlePayment}>Proceed to Payment</button>
            {paymentStatus && <p className="payment-status">{paymentStatus}</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default PremiumDetails;
