/*global event*/
/*eslint no-restricted-globals: ["error", "event"]*/
self.onmessage = function (event) {
  const { formData, selectedProduct } = event.data;
  if (formData && selectedProduct) {
    const basePremium = parseFloat(selectedProduct.premium.replace(/\$/g, "").replace("/year", ""));
    const ageMultiplier = parseFloat(formData.age) < 25 ? 1.2 : 1;
    const coverageMultiplier = 1 + parseFloat(formData.coverageAmount) / 100000;
    const calculatedPremium = (basePremium * ageMultiplier * coverageMultiplier).toFixed(2);
    const result = `Calculated Premium: $${calculatedPremium}`;
    self.postMessage(result);
  }
};
