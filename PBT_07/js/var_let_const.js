// Đoạn 1
console.log(x);
var x = 5;
//dự đoán undefined

// Đoạn 2
console.log(y);
let y = 10;
//dự đoán ReferenceError: Cannot access 'y' before initialization

// Đoạn 3
const z = 15;
z = 20;
console.log(z);
//dự đoán TypeError: Assignment to constant variable.

// Đoạn 4
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
//dự đoán [1, 2, 3, 4]

// Đoạn 5
let a = 1;
{
  let a = 2;
  console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
//dự đoán Trong block: 2 Ngoài block: 1

//  var → in ra undefined (không lỗi)

// Vì var hoisting và auto tạo biến trước.

//  let → ReferenceError

// Vì TDZ (hoisting nhưng chưa được phép dùng).

//  const vẫn sửa được array/object

// Vì const chỉ khóa tham chiếu, không khóa dữ liệu bên trong.
