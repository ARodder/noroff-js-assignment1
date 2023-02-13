import state, { loanButton, fullRepayButton } from "./state.js";
import { updateFields } from "./utils.js";

/**
 * Takes a loan based on the userInput from a prompt.
 * Max loan amount is twice the current bank-balance.
 * First checks if there is already is a loan and denies
 * if there already is an unpaid loan.
 * Else the loan is denied if the loan amount is not entered,
 * if it is greater than twice the current bank balance or 
 * if the loan amount is less than 0
 */
function getLoan() {
  if (state.loan > 0) {
    alert("Cannot take up more than one loan at a time!");
    return;
  }

  let loanAmnt = parseInt(
    prompt("How much do you wish to loan? (max " + state.balance * 2 + ")")
  );
  if (!loanAmnt || loanAmnt > state.balance * 2 || loanAmnt < 0) {
    alert("Invalid loan amount!");
    return;
  }

  state.loan = loanAmnt;
  state.balance += loanAmnt;
  fullRepayButton.style.display = "inline-block";
  updateFields();
}
/**
 * Binds the getLoan function to the onClick event of the 
 * appropriate button.
 */
loanButton.addEventListener("click", getLoan);
