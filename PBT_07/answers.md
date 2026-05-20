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

C2.
 Lỗi 1: thiếu dấu ; (không bắt buộc nhưng nên có) -> best practice

 Lỗi 2: giaBan truyền vào là "100000" (string) -> tính toán sẽ bị ép kiểu ngầm,
        cần validate input và convert sang number.

 Lỗi 3: phanTramGiam cũng cần kiểm tra có phải số không.

 Lỗi 4: if (giaSauGiam = 0) dùng dấu "=" (gán) thay vì "===" (so sánh)
        -> làm giaSauGiam bị gán thành 0, if luôn false vì 0 là falsy.

 Lỗi 5: Nếu giaSauGiam bằng 0 thì nên kiểm tra bằng === 0.

 Lỗi 6: return "Phần trăm giảm không hợp lệ" là string,
        nhưng trường hợp đúng return number -> không thống nhất kiểu trả về.
        (Có thể chấp nhận nhưng tốt nhất return thông báo lỗi rõ ràng).

 Lỗi 7 (lỗi ẩn liên quan var): vòng for dùng var i,
        setTimeout chạy sau 1 giây, lúc đó vòng lặp đã kết thúc,
        i đã thành 5 nên in ra 5 lần "Item 5".
        Sửa bằng let để mỗi vòng có scope riêng.

 Lỗi 8: setTimeout delay 1000ms giống nhau, nếu muốn hiển thị tuần tự
        có thể dùng i * 1000 (không bắt buộc).

function tinhGiaGiamGia(giaBan, phanTramGiam) {
  giaBan = Number(giaBan);
  phanTramGiam = Number(phanTramGiam);

  if (Number.isNaN(giaBan) || Number.isNaN(phanTramGiam)) {
    return "Lỗi: Input không phải số";
  }

  if (giaBan < 0) {
    return "Lỗi: Giá bán không hợp lệ";
  }

  if (phanTramGiam < 0 || phanTramGiam > 100) {
    return "Lỗi: Phần trăm giảm không hợp lệ";
  }

  let giamGia = (giaBan * phanTramGiam) / 100;
  let giaSauGiam = giaBan - giamGia;

  if (giaSauGiam === 0) {
    console.log("Sản phẩm miễn phí!");
  }

  return giaSauGiam;
}

const gia = tinhGiaGiamGia("100000", 20);
console.log("Giá sau giảm: " + gia + "đ");

const gia2 = tinhGiaGiamGia(50000, 110);
console.log("Giá: " + gia2);

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log("Item " + i);
  }, 1000);
}

var có function scope, không có block scope.
Vòng lặp chạy xong rất nhanh, i cuối cùng = 5.
setTimeout chạy sau 1 giây nên nó dùng chung biến i (đã là 5).
Kết quả sai: in ra Item 5 5 lần.
Dùng let thì mỗi vòng lặp tạo ra một biến i riêng (block scope) nên đúng.


```