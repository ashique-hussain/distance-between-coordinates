const getDistance  = require("./utilityService/getDistance");
const DUBLIN_GEO = require("../config/config").DUBLIN_GEO;

/*
* params customerList
* module is responsible to filter the customer within given range
* */
module.exports = function getCustomersInRange(customerList) {
  let withinRange = [];
  let customer, distanceFromDublin;
  for (let index = 0; index < customerList.length; index++) {
    customer = JSON.parse(customerList[index]);
    distanceFromDublin = getDistance(
      DUBLIN_GEO.latitude,
      DUBLIN_GEO.longitude,
      customer.latitude,
      customer.longitude
    );
    distanceFromDublin <= DUBLIN_GEO.range && withinRange.push({ user_id: customer.user_id, name: customer.name });
  }
  return withinRange;
};
