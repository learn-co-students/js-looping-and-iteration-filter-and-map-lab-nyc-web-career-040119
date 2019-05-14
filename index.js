// Code your solution here:
function driverWithRevenueOver (driver, revenue) {
  return driver.filter( functtion (driver) { driver.revenue > revenue })
};

function driverNamesWithRevenueOver (driver, revenue) {
  return driversWithRevenueOver (driver, revenue).map( function (driver) { return driver.name })
};

function exactMatch (driver, nameRevenue) {
  return driver.filter( function (driver) {
    return driver.name === nameRevenue.name || driver.revenue === nameRevenue.revenue;
  })
};

function exactMatchToList (driver, nameRevenue) {
  return exactMatch (driver, nameRevenue) {
    return driver.name;
  }
};
