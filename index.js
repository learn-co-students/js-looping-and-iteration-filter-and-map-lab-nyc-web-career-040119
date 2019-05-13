function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue){
  let theDriver = driversWithRevenueOver(drivers, revenue);
  return theDriver.map(function(driver){
    return driver.name;
  });
}

function exactMatch(drivers, condition){
  return drivers.filter(function(driver){
    let matching;
    for (const key in condition){
      matching = driver[key] === condition[key];
    }
    return matching;
  });
}

function exactMatchToList(drivers, condition){
  let theAnswer = exactMatch(drivers, condition);
  return theAnswer.map(function(driver){
    return driver.name;
  });
}
