export function calculatePremiumWorker(formData, selectedProduct) {
  const basePremium = selectedProduct.premium.replace(/\$/g, "").replace("/year", "");
  const ageMultiplier = parseFloat(formData.age) < 25 ? 1.2 : 1;
  const coverageMultiplier = 1 + parseFloat(formData.coverageAmount) / 100000;
  const calculatedPremium = (basePremium * ageMultiplier * coverageMultiplier).toFixed(2);
  return `Calculated Premium: $${calculatedPremium}`;
}
