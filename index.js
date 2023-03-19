// Declare a global variable called customerName and set it to "bob"
var customerName = "bob";

// Define a function that uppercases the global customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Define a function that declares a global variable called bestCustomer
function setBestCustomer() {
  // Note: Avoid declaring global variables inside functions if possible.
  bestCustomer = "not bob";
}

// Define a function that overwrites the global bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = "maybe bob"; // Change the value to "maybe bob"
}
var customerName = "bob";

// Define a function that uppercases the global customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Define a function that declares a global variable called bestCustomer
function setBestCustomer() {
  bestCustomer = "not bob";
}

// Define a function that overwrites the global bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

// Declare a constant in global scope called leastFavoriteCustomer
const leastFavoriteCustomer = "Bob";

// Define a function that attempts to change the constant
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Tom"; // This will throw a TypeError as constants cannot be changed
}