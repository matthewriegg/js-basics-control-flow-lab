//There are three functions that have been declared for you. You will need to fill in the following code:

//* `scuberGreetingForFeet()` &mdash; Use `if` and `else if` statements to return the
//correct greeting based on the distance the passenger desires to travel.
//* `ternaryCheckCity()` &mdash; Use a ternary operator to return the correct response
//based on the desired destination of the passenger.
//* `switchOnCharmFromTip()` &mdash; Use a `switch` statement to return a different
//response based on the generosity of the passenger's tip.


function scuberGreetingForFeet(feet){
  if(feet < 400){
    return 'This one is on me!'
  }
  else if(feet > 2000 && feet <= 2500){
    return 'I will gladly take your thirty bucks.'
  }
  else if(feet > 2500){
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  return city == 'NYC' ? 'Ok, sounds good.' : 'No go.'
}




function switchOnCharmFromTip(tip){
  switch(tip){
  case 'generous': return 'Thank you so much.'
    break;
  case 'not as generous': return 'Thank you.'
    break;
  default: return 'Bye.'
    break;
  }
}