import state, {
  balanceElem,
  loanElem,
  workElem,
  fullRepayButton,
} from "./state.js";

/**
 * Updates all on-screen fields when they change.
 */
export function updateFields() {
  balanceElem.innerText = state.balance;
  loanElem.innerText = state.loan;
  workElem.innerText = state.pay;
  if (state.loan === 0) {
    fullRepayButton.style.display = "none";
  }
}
