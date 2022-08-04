// Write Javascript code!
console.log("Hello friends");

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};
// const sleepWithSetTimeout = (num, callback) => {
//   const start = Date.now();
//   setTimeout(() => {
//     callback(new Date(start).getSeconds(), num);
//   }, num * 1000);
// };

const syncCallbackFunction = (number, start) => {
  const numIsPrime = isPrime(number);
  console.log(
    "prime: ",
    number,
    "result: ",
    numIsPrime,
    "start: ",
    start,
    "end",
    new Date()
  );
};

const sleepWithCallback = (number, callback) => {
  const start = Date.now();
  const sleep = number * 100;
  while (true) {
    if (Date.now() - start > sleep) break;
  }
  callback(number, new Date(start));
};

const syncWithCallback = () => {
  for (let index = 0; index < 10; index++) {
    console.log("Looping: \t", index, "\t", new Date());
    sleepWithCallback(index, syncCallbackFunction);
  }
};

syncWithCallback();

console.log("All done");
