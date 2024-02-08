#!/usr/bin/env node
import readlineSync from 'readline-sync';
import user from '../../src/cli.js';

const Ame = () => {
  console.log('Welcome to the Brain Games!');
  const name = user();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    const isEven = number % 2 === 0;
    const isCorrect = (isEven && answer === 'yes') || (!isEven && answer === 'no');
    
    if (isCorrect) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven ? 'no' : 'yes'}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (correctAnswersCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

Ame();

export default Ame;
