
/**
 * Global state used to keep track of all the on-screen values.
 */
let state = {
   balance:0,
   loan:0,
   pay:0,
   laptops:[],
   currentLaptop:{}
}

export default state;

/**
 * Defining and exporting all the elements used throughout the website.
 */
export const BASE_API_URL = "https://hickory-quilled-actress.glitch.me/";

export const BANK_BALANCE_ID = "bank-balance";
export const LOAN_BALANCE_ID = "loan-balance";
export const WORK_BALANCE_ID = "work-balance";
export const LAPTOP_SELECTION_ID = "laptop-selection";
export const FEATURE_CONTAINER_ID = "feature-container";
export const LAPTOP_IMAGE_ID = "laptop-image";
export const LAPTOP_IMAGE_CONTAINER_ID = "laptop-image-container";
export const LAPTOP_HEADER_ID = "laptop-header";
export const LAPTOP_DESCRIPTION_ID = "laptop-description";
export const LAPTOP_PRICE_ID = "laptop-price";

export const loanButton = document.getElementsByClassName("loan-button")[0];
export const bankButton = document.getElementsByClassName("bank-button")[0];
export const workButton = document.getElementsByClassName("work-button")[0];
export const buyButton = document.getElementsByClassName("buy-button")[0];
export const fullRepayButton = document.getElementsByClassName("full-repay-button")[0];

export const balanceElem = document.getElementById(BANK_BALANCE_ID);
export const loanElem = document.getElementById(LOAN_BALANCE_ID);
export const workElem = document.getElementById(WORK_BALANCE_ID);
export const laptopSelectionElem = document.getElementById(LAPTOP_SELECTION_ID);
export const featureContainer = document.getElementById(FEATURE_CONTAINER_ID);
export const laptopImageContainer = document.getElementById(LAPTOP_IMAGE_CONTAINER_ID);
export const laptopHeader = document.getElementById(LAPTOP_HEADER_ID);
export const laptopDescription = document.getElementById(LAPTOP_DESCRIPTION_ID);
export const laptopPrice = document.getElementById(LAPTOP_PRICE_ID);
