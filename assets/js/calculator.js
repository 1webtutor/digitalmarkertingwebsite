/**
 * VYORA DIGITAL — DYNAMIC MARKETING ROI CALCULATOR
 * Real-time marketing budget & growth projection calculator
 */

(function () {
  const budgetRange = document.getElementById('calcBudgetRange');
  const budgetValDisplay = document.getElementById('calcBudgetValue');
  const dealRange = document.getElementById('calcDealRange');
  const dealValDisplay = document.getElementById('calcDealValue');
  const industrySelect = document.getElementById('calcIndustry');

  // Result displays
  const resImpressions = document.getElementById('resImpressions');
  const resLeads = document.getElementById('resLeads');
  const resDeals = document.getElementById('resDeals');
  const resRevenue = document.getElementById('resRevenue');
  const resRoas = document.getElementById('resRoas');

  if (!budgetRange || !dealRange) return;

  function formatCurrencyINR(amount) {
    if (amount >= 10000000) {
      return '₹' + (amount / 10000000).toFixed(2) + ' Cr';
    } else if (amount >= 100000) {
      return '₹' + (amount / 100000).toFixed(2) + ' L';
    } else {
      return '₹' + Math.round(amount).toLocaleString('en-IN');
    }
  }

  function formatNumber(num) {
    return Math.round(num).toLocaleString('en-IN');
  }

  function calculateROI() {
    const budget = parseFloat(budgetRange.value);
    const dealValue = parseFloat(dealRange.value);
    const industry = industrySelect ? industrySelect.value : 'general';

    // Industry modifiers
    let cpl = 550; // Cost per lead base
    let closeRate = 0.14; // 14% lead to customer close rate

    if (industry === 'realestate') {
      cpl = 950;
      closeRate = 0.08;
    } else if (industry === 'healthcare') {
      cpl = 450;
      closeRate = 0.22;
    } else if (industry === 'ecommerce') {
      cpl = 280;
      closeRate = 0.28;
    } else if (industry === 'services') {
      cpl = 650;
      closeRate = 0.16;
    } else if (industry === 'local') {
      cpl = 350;
      closeRate = 0.25;
    }

    // Calculations
    const estimatedImpressions = (budget / 0.18); // CPM approx ₹180
    const estimatedLeads = Math.max(5, Math.floor(budget / cpl));
    const estimatedDeals = Math.max(1, Math.round(estimatedLeads * closeRate));
    const projectedRevenue = estimatedDeals * dealValue;
    const roas = (projectedRevenue / budget).toFixed(1);

    // Update Input Display
    budgetValDisplay.textContent = formatCurrencyINR(budget);
    dealValDisplay.textContent = formatCurrencyINR(dealValue);

    // Update Output Display
    if (resImpressions) resImpressions.textContent = formatNumber(estimatedImpressions) + '+';
    if (resLeads) resLeads.textContent = formatNumber(estimatedLeads);
    if (resDeals) resDeals.textContent = formatNumber(estimatedDeals);
    if (resRevenue) resRevenue.textContent = formatCurrencyINR(projectedRevenue);
    if (resRoas) resRoas.textContent = roas + 'x ROAS';
  }

  budgetRange.addEventListener('input', calculateROI);
  dealRange.addEventListener('input', calculateROI);
  if (industrySelect) industrySelect.addEventListener('change', calculateROI);

  calculateROI();
})();
