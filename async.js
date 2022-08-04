console.log("Hello friends");

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

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

const syncWithSetTimeout = () => {
  for (let index = 0; index < 10; index++) {
    console.log("sleeping:", index, new Date().getSeconds());
    sleepWithSetTimeout(index, setTimeOutCallbackFunction);
  }
  console.log("done");
};
syncWithSetTimeout();
