```
A2.
console.log(typeof null);              // "object"
console.log(typeof undefined);         // "undefined"
console.log(typeof NaN);               // "number"
console.log("5" + 3);                  // "53"
console.log("5" - 3);                  // 2
console.log("5" * "3");                // 15
console.log(true + true);              // 2
console.log([] + []);                  // ""
console.log([] + {});                  // "[object Object]"
console.log({} + []);                  // 0  (thường gặp trong JS vì {} bị hiểu là block)

"5" + 3 != "5" - 3 vì:
"5" + 3 dùng toán tử + nên JS ưu tiên nối chuỗi khi có string → "53".
"5" - 3 dùng toán tử - chỉ dành cho phép toán số → JS ép "5" thành số → 5 - 3 = 2.

A3.
console.log(5 == "5");                // true
console.log(5 === "5");               // false
console.log(null == undefined);       // true
console.log(null === undefined);      // false
console.log(NaN == NaN);              // false
console.log(0 == false);              // true
console.log(0 === false);             // false
console.log("" == false);             // true
Từ giờ nên dùng ===

A4.

false
0
-0
0n         
""          
null
undefined
NaN
if ("0") console.log("A");           // In: A
if ("") console.log("B");            // Không in
if ([]) console.log("C");            // In: C
if ({}) console.log("D");            // In: D
if (null) console.log("E");          // Không in
if (0) console.log("F");             // Không in
if (-1) console.log("G");            // In: G
if (" ") console.log("H");           // In: H

A5.
// Cách 1:
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

// Cách 2:
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;

// Cách 3:
var html = `<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>`;




```