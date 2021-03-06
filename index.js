const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputDiv = document.querySelector("#output");

function submitHandler() {
  let initialCost = Number(initialPrice.value);
  let quantity = Number(stocksQuantity.value);
  let price = Number(currentPrice.value);
  calculateProfitAndLoss(initialCost, quantity, price);
}

function calculateProfitAndLoss(initial, quantity, current) {
  // Profit
  if (initial < current) {
    let profit = (current - initial) * quantity;
    let profitPercentage = ((profit / initial) * 100).toFixed(2);
    outputDiv.style.color = "#34D399";
    outputDiv.innerText =
      "The Profit is " +
      profit +
      " and the percent is " +
      profitPercentage +
      " ð ";
  } else if (initial > current) {
    // Loss
    let loss = (initial - current) * quantity;
    let lossPercentage = ((loss / initial) * 100).toFixed(2);
    outputDiv.style.color = "#DC2626";
    outputDiv.innerText =
      "The Loss is " + loss + " and the percent is " + lossPercentage + " ð ";
  } else {
    outputDiv.style.color = "#FBBF24";
    outputDiv.innerText = "No Gain No Loss, Stay Happyð";
  }
}

submitBtn.addEventListener("click", submitHandler);
