// script.js

// JavaScript to handle tab switching
const buyTab = document.getElementById("buy-tab");
const sellTab = document.getElementById("sell-tab");
const buyContent = document.getElementById("buy-content");
const sellContent = document.getElementById("sell-content");

buyTab.addEventListener("click", () => {
    buyTab.classList.add("active");
    sellTab.classList.remove("active");
    buyContent.classList.add("active");
    sellContent.classList.remove("active");
});

sellTab.addEventListener("click", () => {
    sellTab.classList.add("active");
    buyTab.classList.remove("active");
    sellContent.classList.add("active");
    buyContent.classList.remove("active");
});

// Function to calculate the total cost and tax for buying
function calculateBuyTotal() {
    const buyQuantity = parseFloat(document.getElementById("buy-quantity").value);
    const buyPrice = 0.00000001;
    const taxRate = 5; // 5% tax rate

    const buyTotal = buyQuantity / buyPrice;
    const taxAmount = (buyTotal * taxRate) / 100;
    const taxReduced = buyTotal - taxAmount;

    const buyDetailedSummary = document.getElementById("buy-detailed-summary");
    buyDetailedSummary.innerHTML = `
        <p>5% Tax on Buy</p>
        <p>Total Amount: $${buyTotal.toFixed(18)} MEMEDOG</p>
        <p>Total You Receive: $${taxReduced.toFixed(18)} MEMEDOG</p>
    `;
}

// Function to calculate the total amount and tax for selling
function calculateSellTotal() {
    const sellQuantity = parseFloat(document.getElementById("sell-quantity").value);
    const sellPrice = 0.00000001;
    const taxRate = 5; // 5% tax rate

    const sellTotal = sellQuantity * sellPrice;
    const taxAmount = (sellQuantity * sellPrice * taxRate) / 100;
    const taxReduced = sellTotal - taxAmount;

    const sellDetailedSummary = document.getElementById("sell-detailed-summary");
    sellDetailedSummary.innerHTML = `
        <p>5% Tax on Sell</p>
        <p>Total Amount: $${sellTotal.toFixed(18)} BNB</p>
        <p>Total You Receive: $${taxReduced.toFixed(18)} BNB</p>
    `;
}
