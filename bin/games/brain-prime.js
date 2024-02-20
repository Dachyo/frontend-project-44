#!/usr/bin/env node

import readlineSync from 'readline-sync';
import user from '../../src/cli.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const primeg = () => {
  console.log('Welcome to the Brain Games!');
  const name = user();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const number = Math.floor(Math.random() * 100) + 1;
    const isNumberPrime = isPrime(number);

    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = isNumberPrime ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += correctAnswersCount + 1;
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

primeg();
