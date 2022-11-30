// declaring a global variable using var; 
var customerName = "bob"; 

// function that has access to customer and upperCaseIt; 
function upperCaseCustomerName() {
    window.customerName = window.customerName.toUpperCase(); 
}
// function that declares a function at a global scope; 

function setBestCustomer() {
    window.bestCustomer = "not bob"
}
// function that overwrites the previously declared global variable; 
function overwriteBestCustomer() {
    window.bestCustomer = "maybe bob"; 
}
// Declaring a const global variable and trying to overwrite it from within a function; 
const leastFavoriteCustomer = "James"; 
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "Martin"; 
}