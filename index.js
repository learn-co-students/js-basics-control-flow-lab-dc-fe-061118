// Write your code in this file!
function scuberGreetingForFeet(rideDistance){
  if (rideDistance < 400){
    return 'This one is on me!'
  } 
  else if (rideDistance > 2000 && rideDistance < 2501){
    return'I will gladly take your thirty bucks.';
  }   
  else if (rideDistance > 2500){
   return 'No can do.';
  } 
  else {
  return`Your ride is ${rideDistance} feet. Hop in!`;
  }

}

function ternaryCheckCity (city){
  if(city === 'NYC'){
    return 'Ok, sounds good.';
  }
  else{
    return 'No go.';
  }
}

function switchOnCharmFromTip(tipQuality){
  if (tipQuality ==='generous'){
    return 'Thank you so much.';
  }
  else if(tipQuality ==='not as generous'){
    return 'Thank you.';
  }
  
  else {
    return 'Bye.';
  }
  
}