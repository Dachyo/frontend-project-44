#!/usr/bin/env node

import readlineSync from 'readline-sync';
import user from '../../src/cli.js';

const generateProgression = (start, diff, length) => {
  const progression = [start];
  for (let i = 1; i < length; i += 1) {
    progression.push(start + diff * i);
  }
  return progression;
};

const hideRandomElement = (progression) => {
  const hiddenIndex = Math.floor(Math.random() * progression.length);
  const question = progression.slice();
  question[hiddenIndex] = '..';
  return {
    question: question.join(' '),
    correctAnswer: progression[hiddenIndex].toString(),
  };
};

const progressiong = () => {
  console.log('Welcome to the Brain Games!');
  const name = user();
  console.log('What number is missing in the progression?');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const progressionLength = Math.floor(Math.random() * 6) + 5;
    const start = Math.floor(Math.random() * 50) + 1;
    const diff = Math.floor(Math.random() * 10) + 1;

    const progression = generateProgression(start, diff, progressionLength);
    const { question, correctAnswer } = hideRandomElement(progression);

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

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

progressiong();
