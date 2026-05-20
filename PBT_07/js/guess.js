function startGame() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  const maxTries = 7;

  let tries = 0;
  let guessedNumbers = [];

  while (tries < maxTries) {
    let input = prompt(`Nhập số từ 1 đến 100 (Lần ${tries + 1}/${maxTries}):`);

    if (input === null) {
      alert("Bạn đã thoát game!");
      return;
    }

    input = input.trim();

    if (input === "") {
      alert("Vui lòng nhập một số!");
      continue;
    }

    let guess = Number(input);

    if (Number.isNaN(guess) || !Number.isInteger(guess)) {
      alert("Input không hợp lệ! Hãy nhập số nguyên từ 1 đến 100.");
      continue;
    }

    if (guess < 1 || guess > 100) {
      alert("Số phải nằm trong khoảng 1 - 100.");
      continue;
    }

    if (guessedNumbers.includes(guess)) {
      alert("Bạn đã đoán số này rồi!");
      continue;
    }

    guessedNumbers.push(guess);
    tries++;

    if (guess === secretNumber) {
      alert(`Đúng rồi! Bạn đoán đúng sau ${tries} lần!`);
      return;
    } else if (guess < secretNumber) {
      alert("Cao hơn");
    } else {
      alert("Thấp hơn");
    }
  }

  alert(`Bạn đã thua! Đáp án đúng là: ${secretNumber}`);
}
