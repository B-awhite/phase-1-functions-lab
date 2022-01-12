// Code your solution in this file!
function distanceFromHqInBlocks(streetBlock) {
    if (streetBlock > 42 ) {
        return streetBlock - 42;
    } else {
        return 42 - streetBlock;
    }
}

function distanceFromHqInFeet(streetBlock) {
    return distanceFromHqInBlocks(streetBlock) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return (destination - start) * 264;
    } else {
        return (start - destination) * 264;
    }
}

function calculatesFarePrice (start, destination) {
  const ft = distanceTravelledInFeet(start, destination);

  if (ft <= 400) {
      return 0;
  } else if (ft >= 400 && ft <= 2000) {
      return ((ft - 400)* 0.02);
  }else if (ft >= 2000 && ft <=2500) {
      return 25;
  }else{
      return 'cannot travel that far'
  }

}
