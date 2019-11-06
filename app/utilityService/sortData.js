/*
* this is the reusable module to sort the data to ascending order
* */
module.exports = function sortData(data) {
  data.sort(function(data1, data2) {
    if (data1.user_id < data2.user_id) {
      return -1;
    }
    if (data1.user_id > data2.user_id) {
      return 1;
    }
    return 0;
  });
  return data;
};
