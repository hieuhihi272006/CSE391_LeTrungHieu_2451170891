// 1. pipe() — Nối chuỗi functions
function pipe(...fns) {
  return function (value) {
    return fns.reduce((result, fn) => fn(result), value);
  };
}

const process = pipe(
  (x) => x * 2,
  (x) => x + 10,
  (x) => x.toString(),
  (x) => "Kết quả: " + x,
);

console.log(process(5));

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key] !== undefined) {
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const expensiveCalc = memoize((n) => {
  console.log("Đang tính...");
  let result = 0;
  for (let i = 0; i < n; i++) result += i;
  return result;
});

console.log(expensiveCalc(1000000));
console.log(expensiveCalc(1000000));

function debounce(fn, delay) {
  let timerId = null;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const search = debounce((query) => {
  console.log("Searching:", query);
}, 500);

search("iph");
search("iphone");
search("iphone 16");

async function retry(fn, maxAttempts = 3) {
  let attempt = 0;

  while (attempt < maxAttempts) {
    try {
      attempt++;
      return await fn();
    } catch (error) {
      if (attempt === maxAttempts) {
        throw error;
      }
      console.log("Thử lại lần", attempt, "bị lỗi:", error.message);
    }
  }
}

let count = 0;

retry(async () => {
  count++;

  if (count < 3) {
    throw new Error("Lỗi random!");
  }

  return "Thành công!";
}, 5)
  .then((result) => console.log(result))
  .catch((err) => console.log("Fail:", err.message));
