#!/usr/bin/env node
import readlineSync from 'readline-sync';
import user from '../../src/cli.js';
import { generateRandomNumber } from '../../src/index.js';

const evenOrOdd = () => {
  const name = user();
  let result = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (result < 3) {
    const random = generateRandomNumber(1, 100);
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Answer: ');
    if ((random % 2 === 0 && answer === 'yes') || (random % 2 !== 0 && answer === 'no')) {
      console.log('Correct');
      result += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${random % 2 === 0 ? 'yes' : 'no'}`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (result === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

evenOrOdd();

export default evenOrOdd;
