const fs = require("fs");
const getCustomersInRange =  require("./app/getCustomersInRange");
const sortData = require("./app/utilityService/sortData"); // reusable module to sort the data

/*
* Read all Customers List and sorted the list into give distance range
* */
let customerData = fs.readFileSync("./userData/customersListFile.txt", "utf-8");
const customerList = customerData.toString().split("\r\n");
const withinRange = getCustomersInRange(customerList);
const sortedCustomerList = sortData(withinRange);

console.log(sortedCustomerList, "\n\n=>> " + sortedCustomerList.length + " Sorted customers list!! ");
console.log();

module.exports = {
  customerList: sortedCustomerList
};
