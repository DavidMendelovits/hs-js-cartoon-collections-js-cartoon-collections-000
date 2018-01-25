function dwarfRollCall(dwarves) {
  let rollCall = [];
  for (let i = 0; i < dwarves.length; i++) {
    rollCall.push(`${i+1}. ${dwarves[i]}`)
  }
  return rollCall.join(" ") + " "
}

function summonCaptainPlanet(planeteerCalls){
  var PlanetCall = [];
  for (let i = 0; i < planeteerCalls.length; i++){
    PlanetCall.push (`${planeteerCalls[i].toUpperCase()} + !`)
  }
  return PlanetCall
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++){
    if (words[i].length > 4) {
      return true;
    }
  }
  return false;
}

function findTheCheese (foods) {
}
