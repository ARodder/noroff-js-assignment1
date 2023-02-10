import state, { bankButton, workButton, fullRepayButton } from "./state";
import { updateFields } from "./utils";

function doWork() {
  state.pay += 100;
  updateFields();
}

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

function paySalary() {
   if (loan > 0 && loan > pay * 0.1) {
     loan -= pay * 0.1;
     pay -= pay * 0.1;
   } else if (loan > 0 && loan < pay * 0.1) {
     pay -= loan;
     loan = 0;
   }
   balance += pay;
   pay = 0;
   updateFields();
 }



fullRepayButton.addEventListener("click", doFullRepayLoan);
bankButton.addEventListener("click", paySalary);
workButton.addEventListener("click", doWork);
