function driversWithRevenueOver(drivers, amt) {
  return drivers.filter(function (driver) {
    return driver.revenue > amt;
  });
}

function driverNamesWithRevenueOver(drivers, amt) {
  return driversWithRevenueOver(drivers, amt).map(
    function (driver) {
      return driver.name;
    }
  );
}

function exactMatch(drivers, condition) {
  return drivers.filter(function (driver) {
    const key = Object.keys(condition)[0];
    return driver[key] === condition[key];
  });
}

function exactMatchToList(drivers, condition) {
  return exactMatch(drivers, condition).map(function (driver) {
    return driver.name;
  });
}
