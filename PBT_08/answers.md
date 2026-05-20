```
Câu A1
 Function Declaration
function tinhThueBaoHiem_Declaration(luong) {
  let thue = 0;

  if (luong > 11000000) {
    thue = luong * 0.1;
  }

  let thuc_nhan = luong - thue;

  return {
    thue: thue,
    thuc_nhan: thuc_nhan,
  };
}

 2 Function Expression
const tinhThueBaoHiem_Expression = function (luong) {
  let thue = 0;

  if (luong > 11000000) {
    thue = luong * 0.1;
  }

  let thuc_nhan = luong - thue;

  return {
    thue: thue,
    thuc_nhan: thuc_nhan,
  };
};

 3 Arrow Function
const tinhThueBaoHiem_Arrow = (luong) => {
  let thue = 0;

  if (luong > 11000000) {
    thue = luong * 0.1;
  }

  let thuc_nhan = luong - thue;

  return {
    thue: thue,
    thuc_nhan: thuc_nhan,
  };
};

 Function Declaration: HOISTING đầy đủ (gọi trước vẫn chạy được)
console.log(tinhA());  10
function tinhA() {
  return 10;
}

 Function Expression + Arrow: không gọi trước được (bị TDZ với const/let)
console.log(tinhB());
const tinhB = function () {
  return 20;
};

 Lỗi: ReferenceError: Cannot access 'tinhB' before initialization

 Câu A2

 Đoạn 1:
function counter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
}

const c = counter();

console.log(c.increment());  1
console.log(c.increment());  2
console.log(c.increment());  3
console.log(c.decrement());  2
console.log(c.getCount());  2

 count nằm trong scope của counter()
 increment/decrement/getCount là closure,
 nên nó "nhớ" được biến count dù counter() đã chạy xong.

 Đoạn 2:
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 100);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let:", j), 200);
}

 Output sau 200ms (thực tế sẽ in ra theo thứ tự thời gian):
 Sau 100ms:
 var: 3
 var: 3
 var: 3

 Sau 200ms:
 let: 0
 let: 1
 let: 2

 var có function scope -> chỉ có 1 biến i dùng chung cho cả vòng lặp.
 Khi setTimeout chạy (sau 100ms) thì vòng for đã kết thúc, i = 3.
 nên in ra 3 lần đều là 3.

 let có block scope -> mỗi vòng lặp tạo ra 1 biến j mới riêng biệt.
 nên callback setTimeout nhớ đúng giá trị của từng vòng: 0, 1, 2.

 Câu A3
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = nums.filter((n) => n % 2 === 0);

const times3 = nums.map((n) => n * 3);

const sum = nums.reduce((total, n) => total + n, 0);

const firstGreater7 = nums.find((n) => n > 7);

const hasGreater10 = nums.some((n) => n > 10);

const allGreater0 = nums.every((n) => n > 0);

const descriptions = nums.map(
  (n) => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`,
);

const reversed = [...nums].reverse();

A4.
  Output dự đoán:

console.log(name, price, ram, color);
  iPhone 16 25990000 8 Titan

console.log(specs);
  ReferenceError: specs is not defined
  (vì destructuring chỉ lấy ram, color từ specs chứ không tạo biến specs)

  Spread
console.log(updated.price);
  23990000

console.log(updated.sale);
  true

console.log(product.price);
  25990000  (gốc không đổi)

  Spread gotcha
console.log(product.specs.ram);
  16
  Vì spread {...product} chỉ shallow copy (copy nông),
  specs vẫn trỏ chung object với product.specs nên sửa copy.specs.ram sẽ ảnh hưởng product.


```
