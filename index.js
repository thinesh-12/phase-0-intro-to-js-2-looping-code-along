// Code your solutions in this file
function writeCards(names, event) {
    let messageNames = [];
    for (let i = 0; i < names.length; i++) {
       messageNames.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messageNames;
}
writeCards(["Charlie", "Samip", "Ali"], "birthday");


function countDown(num){
    while (num >= 0){
        console.log(num);
        num--;
    }
}
countDown(10);