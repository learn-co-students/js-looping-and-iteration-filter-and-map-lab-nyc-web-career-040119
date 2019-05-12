// const drivers = [
//       { name: 'Sally',   revenue: 400 },
//       { name: 'Annette', revenue: 200 },
//       { name: 'Jim',     revenue: 150 },
//       { name: 'Sally',   revenue: 200 }
// ]

function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function (driver){
    return driver['revenue'] > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue){
  const over_driver = driversWithRevenueOver(drivers, revenue)
  return over_driver.map(function (driver){
    return driver['name']
  })
}

// object1 = { name: 'Sally' }
// object2 = { revenue: 200 }
function exactMatch(drivers, object){
  const object_key = Object.keys(object)
  return drivers.filter(function (driver){
    return driver[object_key] === Object.values(object)[0] //Object.values() returns an array
  })
}

function exactMatchToList(drivers, object){
  const only_match = exactMatch(drivers, object)
  return only_match.map(function (driver){
    return driver['name']
  })
}
