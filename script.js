let quote1 = 'Beware of what you become in pursuit of what you want. - Jim Rohn';
let quote2 = 'It\'s not what happens to you, but how you react to it that matters. - Epictetus';
let quote3 = 'The best revenge is massive success. - Frank Sinatra';
let quote4 = 'You miss 100% of the shots you don\'t take. - Wayne Gretzy';
let quote5 = 'Resentment is like drinking poison and waiting for your enemies to die. - Nelson Mandela';
let quote6 = 'Do not take life too seriously. You will not get out alive. - Elbert Hubbard';

let quotes =  [quote1,quote2,quote3,quote4,quote5,quote6].sort();
let days = ["pazatyesi","salı","çarşamba","perşembe","cuma","cumartesi"]

function generateQuote(){
   let randNum = Math.floor(Math.random()* quotes.length) 
   return console.log(`Today is ${days[randNum]} and today’s quote is ${quotes[randNum]}.`) 

}

document.getElementById("btn").addEventListener("click", generateQuote);