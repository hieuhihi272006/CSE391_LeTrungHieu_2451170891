// Version 1: Classic FizzBuzz
for (let i = 1; i <= 100; i++) {
  let output = "";

  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";

  if (output === "") console.log(i);
  else console.log(output);
}

console.log("------");

// Version 2: Custom FizzBuzz
function customFizzBuzz(n, rules) {
  for (let i = 1; i <= n; i++) {
    let result = "";

    for (let j = 0; j < rules.length; j++) {
      if (i % rules[j].divisor === 0) {
        result += rules[j].word;
      }
    }

    if (result === "") console.log(i);
    else console.log(result);
  }
}

// Test:
customFizzBuzz(30, [
  { divisor: 3, word: "Fizz" },
  { divisor: 5, word: "Buzz" },
  { divisor: 7, word: "Jazz" },
]);
