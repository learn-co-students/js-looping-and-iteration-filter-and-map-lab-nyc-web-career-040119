function driversWithRevenueOver(drivers,revenueNum) {
  let driverRevenues = drivers.filter((driver)=>{
    return driver.revenue > revenueNum;
  })
  return driverRevenues;
}



function driverNamesWithRevenueOver(drivers,revenueNum) {
  let driverReveneues = driversWithRevenueOver(drivers,revenueNum)
  let driverNames = driverReveneues.map((driver)=>{
    return driver.name
  })
  return driverNames
}

function exactMatch(drivers,attributeObj) {
  let attribute = Object.keys(attributeObj)[0]
  let value = Object.values(attributeObj)[0]
  let driverMatches = drivers.filter((driver)=>{
    return driver[attribute] === value
  })
  return driverMatches
}

function exactMatchToList(drivers,attributeObj) {
  let attribute = Object.keys(attributeObj)[0]
  let value = Object.values(attributeObj)[0]
  let driverMatches = exactMatch(drivers,attributeObj)
  let driverMatchesByAttribute = driverMatches.map((driver)=>{
    return driver.name
  })
  return driverMatchesByAttribute
}

