console.log("async file loaded");

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const sleepWithSetTimeout = (num, callback) => {
  const start = Date.now();
  setTimeout(() => {
    callback(new Date(start).getSeconds(), num);
  }, num * 1000);
};

const setTimeOutCallbackFunction = (start, number) => {
  const numIsPrime = isPrime(number);
  console.log("prime:", number, numIsPrime, start, new Date().getSeconds());
};

const syncWithSetTimeout = () => {
  for (let index = 0; index < 10; index++) {
    console.log("Looping: \t", index, "\t", new Date());
    sleepWithSetTimeout(index, setTimeOutCallbackFunction);
  }
  console.log("syncWithSetTimeout done");
};

syncWithSetTimeout();

console.log("done");
