//handle deposit button event
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // console.log("deposite click");

    //-------------- get the amount deposited---------
    const depositInput = document.getElementById("deposit-input");
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    const depositAmount = getInputValue();

    // --------------update deposit total-------------
    const depositTotal = document.getElementById("deposit-total");
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    if (newDepositAmount > 0) {
      const newDepositTotal = previousDepositAmount + newDepositAmount;
      depositTotal.innerText = newDepositTotal;
    }

    //---------------update account balance-----------
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    if (newDepositAmount > 0) {
      const newBalanceTotal = previousBalanceTotal + newDepositAmount;
      balanceTotal.innerText = newBalanceTotal;
    }

    // clear the deposit input field
    depositInput.value = "";
  });

// handle withdraw event handler
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    //-------------- get the amount withdraw----------
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // -----------set withdraw total------------------
    const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    //----------------update balance-----------------
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    if (newWithdrawAmount <= previousBalanceTotal && newWithdrawAmount > 0) {
      const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
      withdrawTotal.innerText = newWithdrawTotal;
    }
    if (previousBalanceTotal >= newWithdrawAmount && newWithdrawAmount > 0) {
      const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
      balanceTotal.innerText = newBalanceTotal;
    } else {
      console.log("Not enought balnace");
    }

    // clear withdraw input
    withdrawInput.value = "";
  });
