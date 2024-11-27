function distanceFromHqInBlocks(someValue) {
  const headquarters = 42; // Scuber's HQ is at block 42
  return Math.abs(someValue - headquarters); // Absolute value for distance
}


function distanceFromHqInFeet(someValue) {
  const blocks = distanceFromHqInBlocks(someValue); // Get distance in blocks
  return blocks * 264; // Convert blocks to feet
}

function distanceTravelledInFeet(start, destination) {
  const blocksTravelled = Math.abs(start - destination); // Absolute block distance
  return blocksTravelled * 264; // Convert blocks to feet
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination); // Get distance in feet

  if (distance <= 400) {
    return 0; // First 400 feet are free
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat fare for distances over 2000 feet and under 2500 feet
  } else {
    return 'cannot travel that far'; // Trips over 2500 feet are not allowed
  }
}
