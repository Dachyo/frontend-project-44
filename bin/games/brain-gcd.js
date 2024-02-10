#!/usr/bin/env node

import readlineSync from 'readline-sync';
import user from '../../src/cli.js';

const gcd = (num1, num2) => {
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return Math.abs(num1);
};

const Ame = () => {
  console.log('Welcome to the Brain Games!');
  const name = user();
  console.log('Find the greatest common divisor of given numbers.');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const number1 = Math.floor(Math.random() * 100) + 1;
    const number2 = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${number1} ${number2}`);
    const answer = parseInt(readlineSync.question('Your answer: '), 10);

    const correctAnswer = gcd(number1, number2);

    if (answer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
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
