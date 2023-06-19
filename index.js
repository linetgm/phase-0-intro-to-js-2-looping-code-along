
// Code your solutions in this file
/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
*/

const name = ["Guadalupe", "Ollie", "Aki"]
function writeCards(name, surprise){
  let invitations = [];
  for (let i=0; i < name.length; i++){
    invitations.push(`Thank you, ${name[i]}, for the wonderful ${surprise} gift!`);  
  }
  return invitations;
}
console.log(writeCards());

function countDown(){
  let num = 10;
  while(num >= 0){
    console.log(num);
    num = num -1;
  }
}  
countDown()