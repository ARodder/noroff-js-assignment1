import state, {
  balanceElem,
  loanElem,
  workElem,
  fullRepayButton,
} from "./state";

export function updateFields() {
  balanceElem.innerText = state.balance;
  loanElem.innerText = state.loan;
  workElem.innerText = state.pay;
  if (state.loan === 0) {
    fullRepayButton.style.display = "none";
  }
}
