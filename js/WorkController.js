import state, { bankButton, workButton, fullRepayButton } from "./state.js";
import { updateFields } from "./utils.js";

/**
 * Adds 100 to the work-balance.
 */
function doWork() {
  state.pay += 100;
  updateFields();
}

/**
 * Repays the loan with the full value of the work-balance(pay).
 * Also ensures if there is residuals after the loan is payed,
 * it is added to the bank balance.
 */
function doFullRepayLoan() {
  if (state.loan <= 0) {
    alert("You have no loan");
    return;
  } else if (state.loan >= state.pay) {
    state.loan -= state.pay;
  } else if (state.loan < state.pay) {
    state.pay -= state.loan;
    state.loan = 0;
    state.balance += state.pay;
  }
  state.pay = 0;
  updateFields();
}

/**
 * Transfers the work-balance(pay) to the bank balance.
 * If there is a loan then 10% of the pay goes to pay down the
 * loan. If the remaining loan is less than 10% of the work-balance(pay)
 * the residuals of the 10% is also transferred to the bank balance.
 * If there is no loan the full amount is payed to the bank-balance.
 */
function paySalary() {
   if (state.loan > 0 && state.loan > state.pay * 0.1) {
    state.loan -= state.pay * 0.1;
    state.pay -= state.pay * 0.1;
   } else if (state.loan > 0 && state.loan < state.pay * 0.1) {
    state.pay -= state.loan;
    state.loan = 0;
   }
   state.balance += state.pay;
   state.pay = 0;
   updateFields();
 }



fullRepayButton.addEventListener("click", doFullRepayLoan);
bankButton.addEventListener("click", paySalary);
workButton.addEventListener("click", doWork);
