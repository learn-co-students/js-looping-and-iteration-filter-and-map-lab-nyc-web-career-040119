// Code your solution here:
function driversWithRevenueOver(drivers,revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue){

  let abvRev = drivers.filter(function(driver){
    if (driver.revenue > revenue){
      return driver
    }
  })

  return abvRev.map(function(driver){
    return driver.name
  })
}

function exactMatch(drivers, match){
  return drivers.filter(function(driver){
    if (match.name === driver.name){
      return driver
    } else if (match.revenue === driver.revenue){
      return driver
    }
  })
}

function exactMatchToList(drivers,match){
  let matched = drivers.filter(function(driver){
    if (driver.name === match.name){
      return driver
    } else if (driver.revenue === match.revenue){
      return driver
    }
  })

  return matched.map( function(driver){
    return driver.name
  })
}
