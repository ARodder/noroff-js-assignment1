import state, {loanButton} from "./state.js";

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

 loanButton.addEventListener("click", getLoan);