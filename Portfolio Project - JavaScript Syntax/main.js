/* Portfolio Project - JavaScript Syntax
          -  Mixed Messages  -

For this project, you will build a message generator program. 
Every time a user runs a program, they should get a new, randomized output. 
You’re welcome to take the project in a couple of different forms, 
   like an astrology generator, inspirational message, or nonsensical jokes. 
To make your program truly random, 
   the message that it outputs should be made up of at least three different pieces of data. 
Take what you know of JavaScript syntax so far to build the program and customize it to your liking.


Plan: 
  1) welcome message for user. 
  2) explain to user how to generate a new message
  3) expalin to user how to end the program
  4) if user generates a new message
    4.1) randomly generate 3 separate parts of a message. 
    4.2) the first part can stay the same to make it easier
    4.3) the second and third parts must be randomly selected from a set of potential messages
    4.4) output the randomly generated message
  5) if user ends the program, then simply end the program. (The main section of the program will be run within a while loop)

Topic:
  The topic will be loosely based on Miyamoto Musashi 21 principles of Dokkodo. 

  General Format:
    1) Always / Do / You must
    2) Think / Respect / Be / Let / Pursue
    3) ...

*/

const quotes = 
{ 
  _part1:
  [
    'Always',
    'Do',
    'You must'
  ],

  _part2:
  [
    {mid: 'think', end: ['lightly of yourself.', 'deeply of the world.', 'without resentment or complaint.']},
    {mid: 'respect', end: ['the gods without counting on their help.', 'your honour.', 'the path. Never stray from the Way.']},
    {mid: 'be', end: ['detached from desire.', 'indifferent to where you live.', 'careful to not let yourself be guided by the feeling of lust or love.']},
    {mid: 'let', end: ['your honour be preserved.', 'go of goods or fiefs for your old age.', 'go of regret.']},
    {mid: 'accept', end: ['everthing just the way it is.', 'having no preferences in all things.', 'letting go of possessions you no longer need.']}
  ],

  selectPart1(x)
  {
    return this._part1[x];
  },

  selectPart2(x)
  {
    return this._part2[x];
  }

}

/*
const part1 = quotes.selectPart1(Math.floor(Math.random() * 3));
const part2 = quotes.selectPart2(Math.floor(Math.random() * 5));
console.log(part1, part2['mid'], part2['end'][Math.floor(Math.random() * 3)]);
*/

console.log('Welcome to the Mixed Messages Generator.');
console.log('This generator contains wise words derived from Miyamoto Musashis 21 precepts from Dokkodo');
console.log('Enter "M" to generate a new quote.')
console.log('Enter "1" to end the program.')


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = () => {
  rl.question('Enter something (type "exit" to quit): ', (answer) => {
    console.log(`You entered: ${answer}`);
    if (answer.toLowerCase() === 'exit') {
      rl.close();
      console.log("Exited the loop.");
      return;
    }
    askQuestion(); // Recurse to ask the next question
  });
};

askQuestion();
