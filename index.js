function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue
  }).map(function(driver) {
    return `${driver.name}`
  });
}

function exactMatch (drivers, att) {
  return drivers.filter(function(driver) {
    for (const key in att) {
      return driver[key] === att[key];
    };
  });
}

function exactMatchToList (drivers, att) {
  return exactMatch(drivers, att)
    .map(function (driver) {
      return driver.name;
    });
}
