// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let result
  if (someValue <= 400) {
    result = "This one is on me!";
    return result;
  }
    else if (someValue > 2000 && someValue <= 2500) {
    result = "I will gladly take your thirty bucks.";
    return result;
  }
    else if (someValue > 2500) {
    result = "No can do.";
    return result;
  }
}

function ternaryCheckCity(cityname) {
    let result
    result = (cityname==='NYC') ? "Ok, sounds good.":"No go.";
    return result;
  }
  
  function switchOnCharmFromTip(tiptype) {
    let result;
    switch (tiptype) {
      case 'generous':
        result = 'Thank you so much.';
        break;
      case 'not as generous':
        result = 'Thank you.';
        break;
      default:
        result = 'Bye.';
    }
    return result;
  }