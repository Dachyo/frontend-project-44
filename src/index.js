const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export { generateRandomNumber };

const wrongAnswer = (answer, correctAnswer, name) => {
  if (parseInt(answer, 10) !== correctAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  }
};

export { wrongAnswer };

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export { isPrime };
