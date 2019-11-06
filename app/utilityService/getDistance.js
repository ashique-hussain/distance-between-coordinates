/*
* This algorithm is faster than  Haversine formula,
* On average in different browsers my new implementation runs 2 times faster.
* js performance test: http://jsperf.com/haversine-salvador/8
* */

module.exports = function getDistance(lat1, lon1, lat2, lon2) {
  const p = 0.017453292519943295;    // Math.PI / 180
  const c = Math.cos;
  const a = 0.5 - c((lat2 - lat1) * p)/2 +
      c(lat1 * p) * c(lat2 * p) *
      (1 - c((lon2 - lon1) * p))/2;
  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
};
